Vue.createApp({
  data() {
    return {
      word: "",
      words: [
        "flexbox",
        "grid",
        "javascript",
        "array",
        "background",
        "hyperlink",
      ],
      fails: 0,
      alphabet: "abcdefghijklmnopqrstuvwxyz",
      guesses: [],
    };
  },
  mounted() {
    this.startGame();
  },
  methods: {
    startGame() {
      this.fails = 0;
      this.triedKeys = [];
      this.word = this.pickRandomWord();
      this.guesses = [];
    },
    pickRandomWord() {
      function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }

      const random = getRandomNumber(1, this.words.length);
      return this.words[random - 1];
    },
    guess(letter) {
      if (this.fails === 10) {
        return;
      }

      if (this.guesses.includes(letter)) {
        return;
      }

      this.guesses.push(letter);
      if (!this.word.includes(letter)) {
        this.fails++;
        this.beep();
      } else {
      }
    },
    hasBeenUsed(letter) {
      return this.guesses.includes(letter);
    },
    beep() {
      var context = new AudioContext();
      var oscillator = context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = 400;
      oscillator.connect(context.destination);
      oscillator.start();
      setTimeout(function () {
        oscillator.stop();
      }, 500);
    },
  },
  computed: {
    keys() {
      return this.alphabet.split("");
    },
    letters() {
      const x = this.word.split("");
      return x.map((c) => {
        if (this.guesses.includes(c)) {
          return c;
        } else {
          return "_";
        }
      });
    },
    gameState() {
      if (
        this.word.split("").reduce((a, c) => {
          if (a === true) {
            return this.guesses.includes(c);
          }
          return false;
        }, true)
      ) {
        return "win";
      }

      if (this.fails < 10) {
        return "active";
      }

      return "fail";
    },
    failsStyle() {
      return {
        backgroundColor: `rgba(255,0,0,0.${this.fails})`,
      };
    },
  },
}).mount("#app");
