<template>
  <button v-if="!isLink" class="app-button" @click="$emit('click')" :disabled="disabled">
    <slot />
  </button>
  <a v-else :href="href" class="app-link">
    <slot />
  </a>
</template>

<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  isLink: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: '',
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>

<style scoped lang="scss">
.app-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  border-radius: 28px;
  background-color: #52b7bd;
  font-size: 24px;
  line-height: 26px;
  font-weight: 500;
  color: #fff;
  min-width: 150px;

  &:hover {
    background-color: #52b7bd;
    transform: scale(1.01);
  }

  &:disabled {
    color: #ffffff;
    background: #999999;
  }
}

.app-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 42px 18px 18px;
  border-radius: 28px;
  background-color: #52b7bd;
  font-size: 24px;
  line-height: 26px;
  font-weight: 500;
  color: #fff;
  min-width: 150px;

  &:before {
    content: '';
    position: absolute;
    top: 21px;
    right: 35px;
    width: 22px;
    height: 22px;
    background-image: url('/assets/img/general/btn-arrow.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.25s;
  }

  &:hover {
    background-color: #52b7bd;
    transform: scale(1.01);

    &:before {
      transform: translateX(10px);
    }
  }
}

@media (max-width: 900px) and (orientation: landscape) {
  .app-button,
  .app-link {
    padding: 7px;
    font-size: 16px;
    line-height: 26px;
  }

  .app-link {
    padding: 7px 20px 7px 0;

    &:before {
      top: 9px;
      right: 14px;
    }
  }
}

@media screen and (max-width: 700px) {
  .app-button {
    padding: 7px;
    font-size: 16px;
    line-height: 26px;
  }
  .app-link {
    padding: 7px 29px 7px 7px;
    font-size: 16px;
    line-height: 26px;

    &:before {
      top: 9px;
      right: 15px;
    }
  }
}
</style>
