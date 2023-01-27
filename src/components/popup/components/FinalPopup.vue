<template>
  <div class="final-popup">
    <div class="top">
      <h2 class="title" v-html="getTitle" />
      <h4 class="subtitle" v-html="getSubtitle" />

      <div class="play-again">
        <h4 class="repeat-title" v-html="getRestartTitle" />

        <app-button @click="restart">Играть еще раз!</app-button>
      </div>

      <a href="https://github.com/NicholasSolo" class="go-to-site" target="_blank">
        Посмотреть другие репозитории
      </a>
    </div>

    <div class="play-again">
      <h4 class="repeat-title" v-html="getRestartTitle" />

      <app-button @click="restart">Играть еще раз!</app-button>
    </div>

    <a href="https://github.com/NicholasSolo" class="go-to-site" target="_blank">
      Посмотреть другие репозитории
    </a>
  </div>
</template>

<script setup>
import AppButton from '../../general/AppButton.vue';
import { computed } from 'vue';
import { mainState, mainMethods } from '../../../store/store.js';

const getTitle = computed(() => {
  return mainState.totalItemsCount === 15 ? 'Круто!' : 'Очень неплохо!';
});
const getSubtitle = computed(() => {
  return mainState.totalItemsCount === 15
    ? 'Вы нашли все предметы.'
    : 'Но я уверен, вы можете лучше :)';
});
const getRestartTitle = computed(() => {
  return mainState.totalItemsCount === 15
    ? 'Хотите сыграть еще раз?'
    : 'Попробуете улучшить результат?';
});

const restart = () => {
  mainMethods.startGame();
};
</script>

<style scoped lang="scss">
.final-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 47px 0 45px 0;
  text-align: center;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 21px;

    .title {
      font-size: 30px;
      line-height: 36px;
      font-weight: 700;
      color: #5b5b5b;
    }

    .subtitle {
      font-size: 24px;
      line-height: 32px;
      color: #5b5b5b;
    }

    .play-again {
      display: none;
    }

    .go-to-site {
      display: none;
    }
  }

  .play-again {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 19px;
    margin-bottom: 12px;

    .repeat-title {
      margin-bottom: 13px;
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      color: #5b5b5b;
    }

    :deep(.app-button) {
      width: 342px;
    }
  }

  .go-to-site {
    font-size: 16px;
    line-height: 26px;
    text-decoration: underline;
    color: #00b9bf;
  }
}

@media (max-width: 900px) and (orientation: landscape) {
  .final-popup {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 29px 10px 27px 10px;

    .top {
      margin-bottom: 16px;

      .title {
        margin-bottom: 3px;
        font-size: 24px;
        line-height: 32px;
      }

      .subtitle {
        margin-bottom: 3px;
        font-size: 18px;
        line-height: 32px;
      }

      .play-again {
        display: flex;
        margin-top: 5px;
        margin-bottom: 9px;

        .repeat-title {
          margin-bottom: 10px;
          font-size: 18px;
          line-height: 32px;
        }

        :deep(.app-button) {
          width: 220px;
        }
      }

      .go-to-site {
        display: block;
        font-size: 12px;
        line-height: 18px;
      }
    }

    .play-again {
      display: none;
    }

    .go-to-site {
      display: none;
    }
  }
}

@media screen and (max-width: 700px) {
  .final-popup {
    padding: 29px 10px 27px 10px;

    .top {
      margin-bottom: 8px;

      .title {
        margin-bottom: 6px;
        font-size: 24px;
        line-height: 32px;
      }

      .subtitle {
        margin-bottom: 7px;
        font-size: 18px;
        line-height: 24px;
      }
    }

    .play-again {
      margin-bottom: 10px;

      .repeat-title {
        margin-bottom: 8px;
        font-size: 18px;
        line-height: 32px;
      }

      :deep(.app-button) {
        width: 220px;
      }
    }

    .go-to-site {
      font-size: 12px;
      line-height: 18px;
    }
  }
}

@media (max-width: 700px) and (orientation: landscape) {
  .final-popup {
    padding: 20px 10px 20px 10px;

    .go-to-site {
      display: none;
    }
  }
}
</style>
