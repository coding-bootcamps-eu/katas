Vue.createApp({
  data() {
    return {
      numbers: [],
    };
  },
  methods: {
    reset() {
      this.numbers.length = 0;
    },
    addNumber() {
      const n = getRandomNumber(1, 49);
      if (!this.numbers.includes(n)) {
        this.numbers.push(n);
        return;
      }
      this.addNumber();
    },
  },
  computed: {
    allowReset() {
      return this.numbers.length !== 6;
    },
    allowAdd() {
      return this.numbers.length === 6;
    },
    sortedNumbers() {
      return this.numbers.sort((a, b) => a - b);
    },
  },
}).mount("#app");

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
