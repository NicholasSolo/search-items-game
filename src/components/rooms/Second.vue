<template>
  <div v-dragscroll class="second-room">
    <div
      :class="['room', { _isGrabbing: isGrabbing }]"
      @mousedown="setIsGrabbing"
      @mouseup="setIsGrabbing"
      @mouseleave="isGrabbing = false"
    >
      <img
        src="/assets/img/game/bedroom/room-two-bg-phone-horiz@2x.png"
        alt=""
        class="preloadMobHorBg"
      />

      <picture>
        <source
          media="(max-width: 800px) and (orientation: landscape)"
          srcset="/assets/img/game/bedroom/room-two-bg-phone-horiz@2x.png"
        />
        <img
          class="room-bg"
          src="/assets/img/game/bedroom/room-two-bg-desktop@2x.png"
          alt="field"
        />
      </picture>

      <div
        v-for="(item, ind) in state.items"
        :key="ind"
        :class="[
          'item',
          `item_${ind + 1}`,
          { _checked: item.checked, _overlay: ind === 0 && getGlass },
        ]"
        @click="clickHandler(ind)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { mainState } from '../../store/store';

const emit = defineEmits(['itemClick']);

const isGrabbing = ref(false);

const getGlass = computed(() => {
  return state.items[0].checked && !state.items[4].checked;
});

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
.second-room {
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
      background-size: cover;

      &._checked {
        opacity: 1;
      }
    }

    .item_1 {
      position: absolute;
      top: 35.9%;
      left: 39.5%;
      width: 51.67%;
      height: 58.2%;
      background-image: url('/assets/img/game/bedroom/items-desk-tab/bed-selected.png');

      &._overlay {
        background-image: url('/assets/img/game/bedroom/items-desk-tab/bed-selected-overlay.png');
      }
    }

    .item_2 {
      position: absolute;
      top: 31%;
      left: -0.18%;
      width: 17.43%;
      height: 51.55%;
      background-image: url('/assets/img/game/bedroom/items-desk-tab/chair-selected.png');
    }

    .item_3 {
      position: absolute;
      bottom: 22.3%;
      left: 32.7%;
      width: 10.473%;
      height: 23.57%;
      background-image: url('/assets/img/game/bedroom/items-desk-tab/shelf-selected.png');
    }

    .item_4 {
      position: absolute;
      bottom: 34%;
      right: 2.8%;
      width: 10.36%;
      height: 7.86%;
      background-image: url('/assets/img/game/bedroom/items-desk-tab/blanket-selected.png');
    }

    .item_5 {
      position: absolute;
      bottom: 38.8%;
      right: 19.15%;
      width: 35.02%;
      height: 8.6%;
      background-image: url('/assets/img/game/bedroom/items-desk-tab/pillow-selected.png');
    }
  }
}

@media screen and (max-width: 1440px) {
  .second-room {
    max-width: 100vw;
  }
}

@media screen and (max-width: 1030px) {
  .second-room {
    max-height: calc(100vh - 121px);

    .room {
      .room-bg {
        max-width: initial;
        max-height: calc(100vh - 121px);
      }
    }
  }
}

@media (max-width: 900px) and (orientation: landscape) {
  .second-room {
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
        max-height: calc(143vh - 52px);
      }
    }
  }
}

@media (max-width: 800px) and (orientation: landscape) {
  .second-room {
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
        max-height: calc(130vh - 52px);
      }

      .item_1 {
        top: 24%;
        left: 37.9%;
        width: 52.9%;
        height: 72.885%;
      }

      .item_2 {
        top: 18%;
        left: 0;
        width: 15.35%;
        height: 63.85%;
        background-image: url('/assets/img/game/bedroom/items-desk-tab/chair-selected-mob-horiz@2x.png');
      }

      .item_3 {
        bottom: 23.7%;
        left: 31%;
        width: 10.91%;
        height: 29.23%;
      }

      .item_4 {
        bottom: 37.2%;
        right: 3%;
        width: 10.36%;
        height: 10.2%;
      }

      .item_5 {
        bottom: 43.35%;
        right: 19.75%;
        width: 36.02%;
        height: 12.6%;
      }
    }
  }
}

@media (max-width: 736px) and (orientation: landscape) {
  .second-room {
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
  .second-room {
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
