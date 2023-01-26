<template>
  <div v-dragscroll class="first-room">
    <div
      :class="['room', { _isGrabbing: isGrabbing }]"
      @mousedown="setIsGrabbing"
      @mouseup="setIsGrabbing"
      @mouseleave="isGrabbing = false"
    >
      <img
        src="/assets/img/game/living-room/room-one-bg-phone-horiz@2x.png"
        alt=""
        class="preloadMobHorBg"
      />

      <picture>
        <source
          media="(max-width: 800px) and (orientation: landscape)"
          srcset="/assets/img/game/living-room/room-one-bg-phone-horiz@2x.png"
        />
        <img
          class="room-bg"
          src="/assets/img/game/living-room/room-one-bg-desktop@2x.png"
          alt="field"
        />
      </picture>

      <div
        v-for="(item, ind) in state.items"
        :key="ind"
        :class="['item', `item_${ind + 1}`, { _checked: item.checked }]"
        @click="clickHandler(ind)"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import { mainState } from '../../store/store';

const emit = defineEmits(['itemClick']);

const isGrabbing = ref(false);

const state = reactive({
  items: [
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
    { checked: false },
  ],
});

const setIsGrabbing = () => {
  isGrabbing.value = !isGrabbing.value;
};

const clickHandler = ind => {
  if (!state.items[ind].checked) {
    state.items[ind].checked = true;
    emit('itemClick');
  }
};

watch(
  () => mainState.totalItemsCount,
  value => {
    if (!value) {
      state.items.forEach(item => {
        item.checked = false;
      });
    }
  }
);
</script>

<style scoped lang="scss">
.first-room {
  position: relative;
  max-width: 1460px;
  max-height: calc(100vh - 158px);
  overflow-x: auto;

  // сделать скроллбар по макету!!!
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  // сделать скроллбар по макету!!!

  .room {
    position: relative;
    width: fit-content;
    cursor: grab;

    // preload mobile horizontal background
    .preloadMobHorBg {
      display: none;
    }
    // preload mobile horizontal background

    .room-bg {
      display: block;
      max-width: 1440px;
    }

    &._isGrabbing {
      cursor: grabbing;
    }

    .item {
      opacity: 0;
      transition: all 0.7s;
      background-repeat: no-repeat;
      background-position: center;

      &._checked {
        opacity: 1;
      }
    }

    .item_1 {
      position: absolute;
      top: 22.4%;
      left: 20.1%;
      width: 6.6%;
      height: 11.085%;
      background-image: url('/assets/img/game/living-room/items-desk-tab/device-selected.png');
    }

    .item_2 {
      position: absolute;
      top: 34%;
      right: 18.1%;
      width: 12.15%;
      height: 12.25%;
      background-image: url('/assets/img/game/living-room/items-desk-tab/cloud-selected.png');
    }

    .item_3 {
      position: absolute;
      bottom: 8%;
      right: 0;
      width: 13.41%;
      height: 44.23%;
      background-image: url('/assets/img/game/living-room/items-desk-tab/chair-selected.png');
    }

    .item_4 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 13.96%;
      height: 28.2%;
      background-image: url('/assets/img/game/living-room/items-desk-tab/table-selected.png');
    }

    .item_5 {
      position: absolute;
      bottom: 9.3%;
      left: 17.55%;
      width: 50.42%;
      height: 37.2%;
      background-image: url('/assets/img/game/living-room/items-desk-tab/couch-selected.png');
    }
  }
}

@media screen and (max-width: 1440px) {
  .first-room {
    max-width: 100vw;
  }
}

@media screen and (max-width: 1030px) {
  .first-room {
    max-height: calc(100vh - 121px);

    .room {
      .room-bg {
        max-width: initial;
        max-height: calc(100vh - 121px);
      }

      .item {
        background-size: cover;
      }
    }
  }
}

@media (max-width: 900px) and (orientation: landscape) {
  .first-room {
    max-height: calc(100vh - 45px);
    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: #00b9bf #ffffff;

    /* Chrome, Edge и Safari */
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }

    &::-webkit-scrollbar-track {
      background: #ffffff;
      background: #ffffff;
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #00b9bf;
      border-radius: 50px;
    }

    .room {
      .room-bg {
        max-height: calc(143vh - 45px);
      }
    }
  }
}

@media (max-width: 800px) and (orientation: landscape) {
  .first-room {
    max-height: calc(100vh - 45px);
    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: #00b9bf #ffffff;

    /* Chrome, Edge и Safari */
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }

    &::-webkit-scrollbar-track {
      background: #ffffff;
      background: #ffffff;
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #00b9bf;
      border-radius: 50px;
    }

    .room {
      .room-bg {
        max-height: calc(130vh - 45px);
      }

      .item_1 {
        top: 19.5%;
        left: 23.6%;
        width: 6.1%;
        height: 12.885%;
      }

      .item_2 {
        top: 33%;
        right: 20.2%;
        width: 10.95%;
        height: 13.25%;
      }

      .item_3 {
        bottom: 3.3%;
        right: 0;
        width: 13.41%;
        height: 49.23%;
        background-image: url('/assets/img/game/living-room/items-desk-tab/chair-selected-mob-hor@2x.png');
      }

      .item_4 {
        bottom: 0;
        left: 0;
        width: 17.66%;
        height: 31.9%;
        background-image: url('/assets/img/game/living-room/items-desk-tab/table-selected-mob-horiz@2x.png');
      }

      .item_5 {
        bottom: 3.35%;
        left: 21.25%;
        width: 46.02%;
        height: 41.6%;
      }
    }
  }
}

@media (max-width: 736px) and (orientation: landscape) {
  .first-room {
    max-height: calc(100vh - 45px);
    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: #00b9bf #ffffff;

    /* Chrome, Edge и Safari */
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }

    &::-webkit-scrollbar-track {
      background: #ffffff;
      background: #ffffff;
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #00b9bf;
      border-radius: 50px;
    }

    .room {
      .room-bg {
        max-height: calc(100vh - 52px);
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .first-room {
    max-height: calc(100vh - 79px);
    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: #00b9bf #ffffff;

    /* Chrome, Edge и Safari */
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }

    &::-webkit-scrollbar-track {
      background: #ffffff;
      background: #ffffff;
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #00b9bf;
      border-radius: 50px;
    }

    .room {
      .room-bg {
        max-height: calc(100vh - 86px);
      }
    }
  }
}
</style>
