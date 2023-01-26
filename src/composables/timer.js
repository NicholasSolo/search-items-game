import { reactive } from 'vue';

const minutes = 0;
const seconds = 59;

let interval;
let callbackMethod;

export const time = reactive({
  minutes,
  seconds,
});

export const resetTime = () => {
  time.minutes = minutes;
  time.seconds = seconds;
};

export const pauseTimer = () => {
  clearInterval(interval);
  interval = undefined;
};

export default function startTimer(callback) {
  if (!callbackMethod) {
    // кэшируем коллбэк для использования при его отсутствии в аргументе
    callbackMethod = callback || (() => console.log('null callback'));
  }
  interval = setInterval(() => {
    if (!time.minutes && !time.seconds) {
      clearInterval(interval);

      if (callback && typeof callback === 'function') {
        callback();
      } else {
        callbackMethod();
      }
    } else if (time.minutes && !time.seconds) {
      time.minutes -= 1;
      time.seconds = 59;
    } else {
      time.seconds -= 1;
    }
  }, 1000);
}
