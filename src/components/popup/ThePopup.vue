<template>
  <div :class="['the-popup']">
    <div class="content">
      <component :is="popups[getCurrentPopup]" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { mainState } from '../../store/store';
import FinalPopup from './components/FinalPopup.vue';
import TimeoutPopup from './components/TimeOutPopup.vue';

const popups = {
  FinalPopup,
  TimeoutPopup,
};

const getCurrentPopup = computed(() => {
  return mainState.popupName;
});
</script>

<style scoped lang="scss">
.the-popup {
  z-index: 10;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  padding: 20px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);

  .content {
    position: absolute;
    min-width: 300px;
    width: 640px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    background: #ffffff;
  }
}

@media (max-width: 900px) and (orientation: landscape) {
  .the-popup {
    align-items: initial;

    .content {
      width: 300px;
      border-radius: 30px;
    }
  }
}

@media screen and (max-width: 700px) {
  .the-popup {
    .content {
      width: 300px;
      border-radius: 30px;
    }
  }
}
</style>
