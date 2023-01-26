<template>
  <header :class="['header', { _game: mainState.isGameActive }]">
    <div class="content app-container">
      <a href="https://github.com/NicholasSolo" class="logo-link" target="_blank">
        <img src="/assets/img/header/logo.png" alt="logo" class="logo" />
      </a>
      <div v-if="mainState.isGameActive" class="toolbar">
        <div class="discount">
          <p class="amount">{{ getProgress }}%</p>
          <p class="text">Внимательность</p>
        </div>
        <div class="center">
          <p class="room-name" v-html="roomName" />
          <div class="bar-wrapper">
            <div class="progress-bar" :style="{ width: `${roomClicks * 20}%` }" />
          </div>
          <p class="room-count">{{ roomClicks }}/5</p>
        </div>
        <div class="timer">0:{{ time < 10 ? `0${time}` : time }}</div>
        <div class="horizontal-rooms" v-html="roomName" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { mainState, getProgress, mainMethods } from '../../store/store';

defineProps({
  roomClicks: {
    type: Number,
    default: 0,
  },
  time: {
    type: Number,
    default: 1,
  },
  roomName: {
    type: String,
    default: '',
  },
});
</script>

<style scoped lang="scss">
.header {
  padding-top: 65px;
  background-color: #ffffff;

  &._game {
    overflow-x: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 42px 0 30px 0;
    z-index: 2;

    .content {
      max-width: 1280px;

      &:before {
        right: -116px;
        top: -122px;
      }
    }
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;

    .logo-link {
      display: block;
      margin-right: 210px;
      border-radius: 50%;
      background-color: #00e4eb;

      .logo {
        display: block;
        max-width: 100px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }

    .toolbar {
      display: flex;
      align-items: center;

      .discount {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
        padding-bottom: 10px;

        .amount {
          font-size: 34px;
          line-height: 34px;
          font-weight: 700;
          color: #8e8e8e;
        }

        .text {
          font-size: 18px;
          line-height: 24px;
          font-weight: 700;
          color: #8e8e8e;
        }
      }

      .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;

        .bar-wrapper {
          width: 340px;
          height: 24px;
          margin-bottom: 10px;
          border-radius: 28px;
          background-color: #ededed;

          .progress-bar {
            height: 100%;
            transition: all 0.5s;
            background-color: #52b7bd;
            border-radius: 28px;
          }
        }

        .room-count {
          font-size: 26px;
          line-height: 28px;
          font-weight: 700;
          color: #8e8e8e;
        }

        .room-name {
          font-size: 20px;
          line-height: 24px;
          font-weight: 700;
          color: #8e8e8e;
        }
      }

      .timer {
        width: 70px;
        padding-bottom: 10px;
        font-size: 34px;
        line-height: 36px;
        font-weight: 700;
        color: #8e8e8e;
      }

      .horizontal-rooms {
        display: none;
      }
    }

    &:before {
      content: '';
      position: absolute;
      width: 675px;
      height: 173px;
      right: -181px;
      top: -137px;
      background-image: url('/assets/img/header/decor.png');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}

@media screen and (max-width: 1230px) {
  .header {
    &._game {
      .content {
        &:before {
          width: 465px;
          height: 133px;
          right: -51px;
          top: -91px;
        }
      }
    }
  }
}

@media screen and (max-width: 1030px) {
  .header {
    padding-top: 41px;

    .content {
      .logo-link {
        display: none;
      }

      &:before {
        width: 415px;
        height: 173px;
        right: -27px;
        top: -90px;
      }
    }

    &._game {
      padding: 23px 0 12px 0;

      .content {
        max-width: 980px;

        .logo-link {
          display: block;
          margin-right: 56px;
        }

        &:before {
          right: -31px;
          top: -65px;
          width: 380px;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .header {
    &._game {
      .content {
        &:before {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 900px) and (orientation: landscape) {
  .header {
    &._game {
      padding: 10px 0 10px 0;

      .content {
        justify-content: center;

        .logo-link {
          display: none;
        }

        .toolbar {
          .discount {
            flex-direction: row;
            align-items: flex-end;
            margin-right: 24px;
            padding-bottom: 0;

            .amount {
              margin-right: 5px;
              font-size: 20px;
              line-height: 1;
            }

            .text {
              font-size: 12px;
              line-height: 16px;
            }
          }

          .center {
            margin-right: 14px;
            flex-direction: row;

            .room-name {
              display: none;
            }

            .bar-wrapper {
              margin-right: 15px;
              margin-bottom: 0;
              width: 220px;
              height: 15px;
            }

            .room-count {
              font-size: 20px;
              line-height: 30px;
            }
          }
          .horizontal-rooms {
            display: block;
            font-size: 12px;
            line-height: 16px;
            color: #8e8e8e;
            font-weight: 700;
          }

          .timer {
            width: 40px;
            margin-right: 12px;
            padding-bottom: 0;
            font-size: 20px;
            line-height: 32px;
          }
        }

        &:before {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 760px) {
  .header {
    &._game {
      .content {
        justify-content: center;
        .logo-link {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 736px) and (orientation: landscape) {
  .header {
    padding-top: 14px;

    .content {
      &:before {
        width: 315px;
        height: 83px;
        right: -38px;
        top: -46px;
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .header {
    &._game {
      padding: 10px 0 13px 0;

      .content {
        .toolbar {
          .discount {
            margin-right: 13px;
            padding-bottom: 12px;

            .amount {
              margin-bottom: -5px;
              font-size: 24px;
              line-height: 26px;
            }

            .text {
              font-size: 12px;
              line-height: 16px;
            }
          }

          .center {
            margin-right: 14px;

            .room-name {
              margin-bottom: 2px;
              font-size: 12px;
              line-height: 16px;
            }

            .bar-wrapper {
              margin-bottom: 0;
              width: 220px;
              height: 15px;
            }

            .room-count {
              font-size: 20px;
              line-height: 30px;
            }
          }

          .timer {
            width: 40px;
            padding-bottom: 13px;
            font-size: 20px;
            line-height: 32px;
          }
        }

        &:before {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .header {
    padding-top: 16px;

    .content {
      &:before {
        width: 311px;
        height: 133px;
        right: -78px;
        top: -49px;
      }
    }
  }
}
</style>
