<template>
  <div v-dragscroll class="third-room">
    <div
      :class="['room', { _isGrabbing: isGrabbing }]"
      @mousedown="setIsGrabbing"
      @mouseup="setIsGrabbing"
      @mouseleave="isGrabbing = false"
    >
      <img
        src="/assets/img/game/child-room/room-three-bg-phone-horiz@2x.png"
        alt=""
        class="preloadMobHorBg"
      />

      <picture>
        <source
          media="(max-width: 800px) and (orientation: landscape)"
          srcset="/assets/img/game/child-room/room-three-bg-phone-horiz@2x.png"
        />
        <img
          class="room-bg"
          src="/assets/img/game/child-room/room-three-bg-desktop@2x.png"
          alt="field"
        />
      </picture>

      <div
        v-for="(item, ind) in state.items"
        :key="ind"
        :class="[
          'item',
          `item_${ind + 1}`,
          { _checked: item.checked, _overlay: ind === 4 && getGlass },
        ]"
        @click="ind === 4 ? '' : clickHandler(ind)"
      >
        <template v-if="ind === 4">
          <div
            v-for="(item, index) in 5"
            :class="`fake-item${index + 1}`"
            @click="clickHandler(ind)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { mainState } from '../../store/store';

const emit = defineEmits(['itemClick']);

const isGrabbing = ref(false);

const getGlass = computed(() => {
  return state.items[4].checked && !state.items[0].checked;
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
.third-room {
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
      z-index: 1;
      position: absolute;
      bottom: 4.4%;
      right: 26.6%;
      width: 26.4%;
      height: 47.245%;
      background-image: url('/assets/img/game/child-room/items-desk-tab/unicorn-selected.png');
    }

    .item_2 {
      position: absolute;
      bottom: 4.7%;
      left: 0;
      width: 14.25%;
      height: 24.4%;
      background-image: url('/assets/img/game/child-room/items-desk-tab/moon-selected.png');
    }

    .item_3 {
      z-index: 1;
      position: absolute;
      top: 37%;
      left: 23.4%;
      width: 28%;
      height: 13.63%;
      background-image: url('/assets/img/game/child-room/items-desk-tab/komod-selected.png');
    }

    .item_4 {
      position: absolute;
      bottom: 23.4%;
      right: 0;
      width: 22.66%;
      height: 49.33%;
      background-image: url('/assets/img/game/child-room/items-desk-tab/toys-selected.png');
    }

    .item_5 {
      position: absolute;
      bottom: 15%;
      left: 7.9%;
      width: 77.85%;
      height: 65.49%;
      background-image: url('/assets/img/game/child-room/items-desk-tab/bed-selected.png');

      &._overlay {
        background-image: url('/assets/img/game/child-room/items-desk-tab/bed-selected-overlay.png');
      }

      .fake-item1 {
        position: absolute;
        width: 82%;
        height: 45%;
        bottom: 9%;
        right: 6%;
        background-color: transparent;
      }

      .fake-item2 {
        position: absolute;
        width: 8%;
        height: 56%;
        top: 3%;
        left: 6%;
        background-color: transparent;
      }

      .fake-item3 {
        z-index: 1;
        position: absolute;
        width: 5%;
        height: 31%;
        bottom: 10%;
        right: 1%;
        background-color: transparent;
      }

      .fake-item4 {
        position: absolute;
        width: 5%;
        height: 27%;
        top: 2%;
        left: 0.8%;
        background-color: transparent;
      }

      .fake-item5 {
        position: absolute;
        width: 7%;
        height: 10%;
        top: 36%;
        left: 13.8%;
        background-color: transparent;
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .third-room {
    max-width: 100vw;
  }
}

@media screen and (max-width: 1030px) {
  .third-room {
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
  .third-room {
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
  .third-room {
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
        bottom: 2.5%;
        right: 25.2%;
        width: 24.3%;
        height: 54.285%;
      }

      .item_2 {
        bottom: 3%;
        left: 6.4%;
        width: 12.95%;
        height: 27.25%;
      }

      .item_3 {
        top: 31%;
        left: 28.4%;
        width: 26%;
        height: 13.63%;
      }

      .item_4 {
        bottom: 25.4%;
        right: 0;
        width: 21.06%;
        height: 54.33%;
      }

      .item_5 {
        bottom: 15%;
        left: 13.8%;
        width: 72.75%;
        height: 74.49%;
      }
    }
  }
}

@media (max-width: 736px) and (orientation: landscape) {
  .third-room {
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
  .third-room {
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
