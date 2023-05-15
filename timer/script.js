Vue.createApp({
  data() {
    return {
      timerActive: false,
      selectedTimer: 0,
      time: 0,
      interval: null,
    };
  },
  methods: {
    startTimer(minutes) {
      this.selectedTimer = minutes;
      this.time = minutes * 60;
      this.timerActive = true;
      this.startInterval();
    },
    startInterval() {
      this.interval = setInterval(() => {
        this.time--;
        document.title = this.remainingTime;
        if (this.time === 0) {
          clearInterval(this.interval);
          this.interval = null;
          this.timerActive = false;
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.interval);
      this.interval = null;
      this.timerActive = false;
      this.time = 0;
      document.title = "Timer";
    },
    resetTimer() {
      this.stopTimer();
      this.startTimer(this.selectedTimer);
    },
    pauseOrContinueTimer() {
      if (!this.timerActive) {
        return;
      }

      if (this.timerPaused === false) {
        this.startInterval();
      } else {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
  },
  computed: {
    timerPaused() {
      return this.time > 0 && this.interval !== null;
    },
    pauseContinueLabel() {
      if (this.time > 0 && this.interval !== null) {
        return "Pause";
      } else {
        return "Continue";
      }
    },
    remainingTime() {
      let min = Math.floor(this.time / 60);

      let sec = (this.time - min * 60).toString();
      if (sec.length === 1) {
        sec = "0" + sec;
      }
      return `${min}:${sec}`;
    },
  },
}).mount("#app");
