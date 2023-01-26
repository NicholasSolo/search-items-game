<template>
  <section class="game-page">
    <app-header
      :room-clicks="mainState.currentItemsCount"
      :time="time.seconds"
      :room-name="getRoomName"
    />
    <div class="game-field">
      <Transition name="slide-fade">
        <component :is="rooms[getCurrentRoom].component" @itemClick="clickHandler" />
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { mainState, mainMethods } from '../store/store';
import startTimer, { time, resetTime, pauseTimer } from '../composables/timer';
import First from './rooms/First.vue';
import Second from './rooms/Second.vue';
import Third from './rooms/Third.vue';
import AppHeader from './layout/AppHeader.vue';

const rooms = {
  first: { name: 'гостиная', component: First },
  second: { name: 'спальня', component: Second },
  third: { name: 'детская', component: Third },
};

const getCurrentRoom = computed(() => {
  return mainState.totalItemsCount < 5
    ? 'first'
    : mainState.totalItemsCount >= 5 && mainState.totalItemsCount < 10
    ? 'second'
    : 'third';
});

const getRoomName = computed(() => {
  return rooms[getCurrentRoom.value].name;
});

const clickHandler = () => {
  mainMethods.increaseTotalCount();
  mainState.currentItemsCount++;
  if (mainState.currentItemsCount === 5) {
    mainState.currentItemsCount = 0;
  }

  if (mainState.totalItemsCount === 15) {
    mainMethods.setPopupName('EmailPopup');

    pauseTimer();
  }
};

watch(
  () => mainState.isGameActive,
  value => {
    if (value) {
      mainMethods.startGame();
    }
  }
);
</script>

<style scoped lang="scss">
.game-page {
  display: flex;
  flex-direction: column;
  padding: 158px 0 0 0;

  .game-field {
    align-self: center;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
}

@media screen and (max-width: 1030px) {
  .game-page {
    padding-top: 121px;
  }
}

@media (max-width: 900px) and (orientation: landscape) {
  .game-page {
    padding-top: 45px;
  }
}
@media screen and (max-width: 550px) {
  .game-page {
    padding-top: 79px;
  }
}
</style>
