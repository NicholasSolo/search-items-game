<template>
  <div class="hello-page">
    <app-header />
    <div class="content app-container">
      <h2 class="title">Поиск предметов</h2>
      <p class="description">
        Проверьте свою внимательность, отыскав спрятанные предметы :) <br />
        Поторопитесь, у&nbsp;вас есть 60&nbsp;секунд на&nbsp;поиски.
      </p>
      <!--      <div class="demo" />-->
      <p class="text">
        В&nbsp;каждой из&nbsp;<span>трех комнат</span> спрятано по&nbsp;5&nbsp;предметов -
        постарайтесь собрать все.
      </p>

      <app-button @click="startGame"> Начать игру! </app-button>

      <share-block />
    </div>

    <div class="preload">
      <img src="/assets/img/game/bedroom/room-two-bg-desktop@2x.png" alt="" />
      <img src="/assets/img/game/child-room/room-three-bg-desktop@2x.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { mainMethods } from '../store/store';
import AppButton from './general/AppButton.vue';
import AppHeader from './layout/AppHeader.vue';
import ShareBlock from './general/ShareBlock.vue';

const startGame = () => {
  mainMethods.setGameStatus(true);
};
</script>

<style scoped lang="scss">
.hello-page {
  overflow-x: hidden;

  .preload {
    z-index: -50;
    opacity: 0;
    display: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
    text-align: center;
    font-size: 20px;
    line-height: 37px;
    color: #000000;

    .title {
      margin-bottom: 7px;
      font-size: 40px;
      line-height: 45px;
      font-weight: 700;
      color: #00b9bf;
    }

    .description {
      max-width: 900px;
      margin-bottom: 17px;
      font-size: 20px;
      line-height: 37px;

      .prize {
        color: #00b9bf;
        text-decoration: underline;
      }
    }

    .demo {
      display: block;
      position: relative;
      width: 714px;
      height: 380px;
      margin-bottom: 10px;
      border-radius: 40px;
      background-image: url('/assets/img/intro/gif_desktop.gif');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    .text {
      max-width: 520px;
      margin-bottom: 23px;
      font-size: 16px;
      line-height: 26px;

      span {
        font-weight: 700;
      }
    }

    :deep(.app-button) {
      width: 342px;
      margin-bottom: 15px;
    }
  }
}

@media screen and (max-width: 1030px) {
  .hello-page {
    .content {
      .title {
        margin-bottom: 5px;
        font-size: 32px;
        line-height: 38px;
      }

      .description {
        max-width: 720px;
        margin-bottom: 12px;
        font-size: 16px;
        line-height: 24px;
      }

      .demo {
        width: 544px;
        height: 290px;
      }

      .text {
        max-width: 450px;
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 24px;
      }

      :deep(.app-button) {
        width: 342px;
        margin-bottom: 10px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .hello-page {
    .content {
      .title {
        order: -4;
      }

      .description {
        order: -3;
      }

      :deep(.app-button) {
        order: -2;
      }

      .text {
        order: -1;
      }

      .demo {
        width: 350px;
        height: 393px;
        border-radius: 20px;
        background-image: url('/assets/img/intro/gif_mob.gif');

        @media screen and (max-width: 375px) {
          width: 100%;
        }
      }
    }
  }
}

@media (max-width: 736px) and (orientation: landscape) {
  .hello-page {
    .content {
      .title {
        margin-bottom: 16px;
        font-size: 24px;
        height: 32px;
      }

      .description {
        max-width: 560px;
        font-size: 12px;
        line-height: 22px;

        br {
          display: none;
        }
      }

      .demo {
        width: 560px;
        height: 300px;
      }

      .text {
        max-width: 460px;
        margin-bottom: 16px;
        font-size: 12px;
        line-height: 20px;
      }

      :deep(.app-button) {
        width: 220px;
        margin-bottom: 14px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .hello-page {
    .content {
      .title {
        margin-bottom: 16px;
        font-size: 24px;
        height: 32px;
      }

      .description {
        font-size: 12px;
        line-height: 22px;

        br {
          display: none;
        }
      }

      :deep(.app-button) {
        width: 220px;
        margin-bottom: 12px;
      }

      .text {
        margin-bottom: 18px;
        font-size: 12px;
        line-height: 20px;
      }

      .demo {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
