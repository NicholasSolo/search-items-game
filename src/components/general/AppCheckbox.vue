<template>
  <label :class="['app-check-box', { _checked: state.checked, _error: props.error }]">
    <input v-model="state.checked" type="checkbox" class="check" @change="handler" />

    <span class="agree-text" v-html="props.labelText" />
  </label>
  <p class="input-err" v-if="props.error">Подтвердите ваше согласие</p>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['clear', 'update:modelValue']);

const props = defineProps({
  labelText: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  checked: false,
});

const handler = () => {
  emit('update:modelValue', state.checked);
  emit('clear');
};
</script>

<style lang="scss">
.app-check-box {
  position: relative;
  display: flex;
  padding-left: 30px;

  .agree-text {
    max-width: 330px;
    font-size: 12px;
    line-height: 16px;
    color: #2a2525;
    text-align: center;

    .policy {
      text-decoration: underline;
      color: #00b9bf;
    }
  }

  .check {
    display: none;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 7px;
    width: 12px;
    height: 12px;
    background: #ffffff;
    border: 2px solid #52b7bd;
    border-radius: 3px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 12px;
    width: 6px;
    height: 6px;
    background-color: #52b7bd;
    opacity: 0;
    transition: opacity 0.15s;
  }

  &._checked {
    &:after {
      opacity: 1;
    }
  }

  &._error {
    &:before {
      border-color: #ff0066;
    }
  }
}

.input-err {
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  color: #ff0066;
}

@media screen and (max-width: 700px), (max-width: 900px) and (orientation: landscape) {
  .app-check-box {
    margin-bottom: 0;

    .agree-text {
      max-width: 260px;
      font-size: 10px;
      line-height: 13px;
    }

    &:before {
      top: 0;
      left: 25px;
      width: 9px;
      height: 9px;
    }
    &:after {
      top: 4px;
      left: 29px;
      width: 5px;
      height: 5px;
    }
  }

  .input-err {
    font-size: 10px;
    line-height: 13px;
  }
}
</style>
