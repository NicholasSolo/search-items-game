<template>
  <div :class="['app-input-wrapper', { _error: props.errorText }]">
    <input
      v-if="props.type === 'name'"
      v-model="state.value"
      type="text"
      :class="['name', { _error: props.errorText }]"
      :placeholder="props.placeholder"
      @input="inputHandler($event, 'name')"
      @blur="filterInput($event, 'name')"
      @focus="$emit('clear', 'name')"
    />

    <input
      v-if="props.type === 'phone'"
      v-model="state.value"
      type="text"
      :class="['phone', { _error: props.errorText }]"
      :placeholder="props.placeholder"
      v-maska="'+7 (###) ###-##-##'"
      @focus="$emit('clear', 'phone')"
      @input="inputHandler"
    />

    <input
      v-if="props.type === 'email'"
      v-model="state.value"
      type="text"
      :class="['email', { _error: props.errorText }]"
      :placeholder="props.placeholder"
      @focus="$emit('clear', 'email')"
      @input="inputHandler($event, 'email')"
    />

    <input
      v-if="props.type === 'code'"
      v-model="state.value"
      type="text"
      :class="['code', { _error: props.errorText }]"
      :placeholder="props.placeholder"
      v-maska="'####'"
      @focus="$emit('clear', 'email')"
      @input="inputHandler"
    />

    <p class="input-err" v-html="props.errorText" />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';

const emit = defineEmits(['clear', 'update:modelValue']);

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  errorText: {
    type: String,
    default: '',
  },
});

const state = reactive({
  value: '',
});

const filterInput = (target, type) => {
  if (type === 'name' && target.value) {
    state.value = target.value.replace(/[^А-Яа-яёЁ\s]/gi, '');
  }

  if (type === 'email' && target.value) {
    state.value = target.value.replace(/[Ёёа-яА-Я\s]/gi, '');
  }
};

const inputHandler = ({ target }, type) => {
  if (type) {
    filterInput(target, type);
  }

  emit('update:modelValue', state.value);
};
</script>

<style scoped lang="scss">
.app-input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  .name,
  .email,
  .phone,
  .code {
    width: 320px;
    height: 40px;
    padding: 16px 24px;
    background: #ededed;
    border-radius: 47px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #5b5b5b;

    &::placeholder {
      color: #b1b1b1;
    }

    &._error {
      border: 1px solid #ff0066;

      &::placeholder {
        color: #ff0066;
      }
    }
  }

  .input-err {
    display: none;
    margin-top: 4px;
    font-size: 12px;
    line-height: 16px;
    color: #ff0066;
  }

  &._error {
    .input-err {
      display: block;
    }
  }
}

@media screen and (max-width: 700px), (max-width: 900px) and (orientation: landscape) {
  .app-input-wrapper {
    margin-bottom: 8px;

    .name,
    .email,
    .phone,
    .code {
      width: 230px;
      height: 30px;
      font-size: 14px;
      padding: 15px 24px;
    }

    .input-err {
      margin-top: 0;
      font-size: 10px;
      line-height: 13px;
    }
  }
}
</style>
