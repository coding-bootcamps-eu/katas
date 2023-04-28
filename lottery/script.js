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
      this.numbers.push(getRandomNumber(1, 49));
    },
  },
  computed: {
    allowReset() {
      return this.numbers.length !== 6;
    },
    allowAdd() {
      return this.numbers.length === 6;
    },
  },
}).mount("#app");

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
