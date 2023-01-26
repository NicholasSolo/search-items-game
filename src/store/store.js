import { computed, reactive } from 'vue';

import startTimer, { resetTime, pauseTimer } from '../composables/timer';

const state = reactive({
  popupName: 'FinalPopup',
  isGameActive: false,
  currentItemsCount: 0,
  totalItemsCount: 0,
});

const getProgress = computed(() => {
  if (state.totalItemsCount >= 1 && state.totalItemsCount <= 5) {
    return 30;
  } else if (state.totalItemsCount >= 6 && state.totalItemsCount < 9) {
    return 50;
  } else if (state.totalItemsCount >= 9 && state.totalItemsCount < 12) {
    return 70;
  } else if (state.totalItemsCount >= 12 && state.totalItemsCount < 14) {
    return 90;
  } else if (state.totalItemsCount >= 14) {
    return 99;
  }
  return 0;
});

const methods = {
  setPopupName(payload) {
    state.popupName = payload;

    if (payload) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  },
  setGameStatus(payload) {
    state.isGameActive = payload;
  },
  increaseTotalCount() {
    state.totalItemsCount++;
  },

  startGame() {
    resetTime();

    if (state.popupName) {
      state.popupName = '';
    }

    if (state.totalItemsCount) {
      state.totalItemsCount = 0;
    }

    if (state.currentItemsCount) {
      state.currentItemsCount = 0;
    }

    startTimer(() => {
      if (state.totalItemsCount < 1) {
        this.setPopupName.call(methods, 'TimeoutPopup');
      } else if (state.totalItemsCount >= 1 && state.totalItemsCount < 15) {
        this.setPopupName.call(methods, 'EmailPopup');
      }
      pauseTimer();
    });
  },
};

export { state as mainState, methods as mainMethods, getProgress };
