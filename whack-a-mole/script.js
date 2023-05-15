Vue.createApp({
  data() {
    return {
      score: 0,
      column: 0,
      row: 0,
      timeoutId: null,
      time: 0,
      showAfterGameStats: false,
    };
  },
  methods: {
    newGame() {
      this.score = 0;
      this.showAfterGameStats = false;
      this.time = 10;

      this.moveMole();
      this.randomPosition(1000);

      const interval = setInterval(() => {
        this.time--;
        if (this.time === 0) {
          this.showAfterGameStats = true;
          clearInterval(interval);
          clearTimeout(this.timeoutId);
        }
      }, 1000);
    },
    whack() {
      if (this.time === 0) {
        return;
      }

      this.score++;

      window.clearTimeout(this.timeoutId);
      this.timeoutId = null;
      this.moveMole();
      this.randomPosition(1000);
    },
    randomPosition(timeout) {
      this.timeoutId = window.setTimeout(() => {
        this.moveMole();
        this.randomPosition(1000);
      }, timeout);
    },
    getRandomNumber(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
    moveMole() {
      this.column = this.getRandomNumber(1, this.columns);
      this.row = this.getRandomNumber(1, this.rows);
    },
  },
  computed: {
    gameInProgess() {
      return this.time !== 0;
    },
    columns() {
      const grid = this.$refs.grid;
      if (grid) {
        const styles = window.getComputedStyle(grid);
        return styles.gridTemplateColumns.split(" ").length;
      }
      return 0;
    },
    rows() {
      const grid = this.$refs.grid;
      if (grid) {
        const styles = window.getComputedStyle(grid);
        return styles.gridTemplateRows.split(" ").length;
      }
      return 0;
    },
  },
}).mount("#app");
