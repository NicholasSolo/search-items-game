<template>
  <HelloPage v-show="!mainState.isGameActive" />
  <GamePage v-show="mainState.isGameActive" />

  <the-popup v-if="mainState.popupName" />
</template>

<script setup>
import { mainState } from './store/store';

import ThePopup from './components/popup/ThePopup.vue';
import HelloPage from './components/HelloPage.vue';
import GamePage from './components/GamePage.vue';
</script>

<style scoped lang="scss" />
