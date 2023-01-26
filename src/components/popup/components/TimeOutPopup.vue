<template>
  <div class="time-out-popup">
    <h3 class="title">Время вышло,</h3>
    <p class="subtitle">но вы не собрали достаточно предметов.</p>
    <p class="small-text">Попробуйте еще раз!</p>
    <app-button @click="restart">Играть еще раз!</app-button>
  </div>
</template>

<script setup>
import { mainMethods } from '../../../store/store';
import AppButton from '../../general/AppButton.vue';

const restart = () => {
  mainMethods.startGame();
};
</script>

<style scoped lang="scss">
.time-out-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 89px 0 100px 0;
  text-align: center;

  .title {
    margin-bottom: 10px;
    font-size: 40px;
    line-height: 42px;
    font-weight: 700;
    color: #5b5b5b;
  }

  .subtitle {
    max-width: 410px;
    margin-bottom: 54px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: #5b5b5b;
  }

  .small-text {
    margin-bottom: 33px;
    font-size: 16px;
    line-height: 26px;
    color: #2a2525;
  }

  :deep(.app-button) {
    width: 342px;
  }
}

@media (max-width: 900px) and (orientation: landscape) {
  .time-out-popup {
    padding: 29px 0 41px 0;
    text-align: center;

    .title {
      margin-bottom: 3px;
      font-size: 24px;
      line-height: 32px;
    }

    .subtitle {
      max-width: 260px;
      margin-bottom: 13px;
      font-size: 12px;
      line-height: 22px;
    }

    .small-text {
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 26px;
    }

    :deep(.app-button) {
      width: 220px;
    }
  }
}

@media screen and (max-width: 700px) {
  .time-out-popup {
    padding: 29px 0 41px 0;
    text-align: center;

    .title {
      margin-bottom: 3px;
      font-size: 24px;
      line-height: 32px;
    }

    .subtitle {
      max-width: 260px;
      margin-bottom: 13px;
      font-size: 12px;
      line-height: 22px;
    }

    .small-text {
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 26px;
    }

    :deep(.app-button) {
      width: 220px;
    }
  }
}
</style>
