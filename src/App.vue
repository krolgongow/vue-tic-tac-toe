<template>
  <div class="cover" :class="winner"></div>
  <div class="result" :class="winner">
    <div class="winner">{{ winner }}</div>
    <button class="newGame" @click="reset">New game</button>
  </div>
  <header>
    <div class="player1 move" :class="{ inactive: player2Move }">
      <p>Player 1 move</p>
    </div>
    <div class="player2 move" :class="{ inactive: player1Move }">
      <p>Player 2 move</p>
    </div>
  </header>
  <main>
    <div class="field" data-key="1" @click="changePlayer">
      <choosen-field
        v-if="player1Choices.includes('1') || player2Choices.includes('1')"
        :image="checkingChoices('1')"
        @click.stop
      ></choosen-field>
    </div>
    <div class="field" data-key="2" @click="changePlayer">
      <choosen-field
        v-if="player1Choices.includes('2') || player2Choices.includes('2')"
        :image="checkingChoices('2')"
        @click.stop
      ></choosen-field>
    </div>
    <div class="field" data-key="3" @click="changePlayer">
      <choosen-field
        v-if="player1Choices.includes('3') || player2Choices.includes('3')"
        :image="checkingChoices('3')"
        @click.stop
      ></choosen-field>
    </div>
    <div class="field" data-key="4" @click="changePlayer">
      <choosen-field
        v-if="player1Choices.includes('4') || player2Choices.includes('4')"
        :image="checkingChoices('4')"
        @click.stop
      ></choosen-field>
    </div>
    <div class="field" data-key="5" @click="changePlayer">
      <choosen-field
        v-if="player1Choices.includes('5') || player2Choices.includes('5')"
        :image="checkingChoices('5')"
        @click.stop
      ></choosen-field>
    </div>
    <div class="field" data-key="6" @click="changePlayer">
      <choosen-field
        v-if="player1Choices.includes('6') || player2Choices.includes('6')"
        :image="checkingChoices('6')"
        @click.stop
      ></choosen-field>
    </div>
    <div class="field" data-key="7" @click="changePlayer">
      <choosen-field
        v-if="player1Choices.includes('7') || player2Choices.includes('7')"
        :image="checkingChoices('7')"
        @click.stop
      ></choosen-field>
    </div>
    <div class="field" data-key="8" @click="changePlayer">
      <choosen-field
        v-if="player1Choices.includes('8') || player2Choices.includes('8')"
        :image="checkingChoices('8')"
        @click.stop
      ></choosen-field>
    </div>
    <div class="field" data-key="9" @click="changePlayer">
      <choosen-field
        v-if="player1Choices.includes('9') || player2Choices.includes('9')"
        :image="checkingChoices('9')"
        @click.stop
      ></choosen-field>
    </div>
  </main>
  <button class="reset" @click="reset">reset</button>
</template>

<script>
import ChoosenField from "./components/ChoosenField.vue";
export default {
  components: { ChoosenField },
  data() {
    return {
      player1Choices: [],
      player2Choices: [],
      player1Move: true,
      player2Move: false,
      winner: "off",
    };
  },
  methods: {
    changePlayer(e) {
      if (this.player1Move) {
        this.player1Choices.push(e.target.dataset.key);
        this.checkingResult(this.player1Choices);
        this.player1Move = false;
        this.player2Move = true;
      } else {
        this.player2Choices.push(e.target.dataset.key);
        this.checkingResult(this.player2Choices);
        this.player1Move = true;
        this.player2Move = false;
      }
    },
    checkingChoices(num) {
      if (this.player1Choices.includes(num)) {
        return "circle";
      } else if (this.player2Choices.includes(num)) {
        return "cross";
      }
    },
    checkingResult(arr) {
      if (
        (arr.includes("1") && arr.includes("2") && arr.includes("3")) ||
        (arr.includes("1") && arr.includes("4") && arr.includes("7")) ||
        (arr.includes("1") && arr.includes("5") && arr.includes("9")) ||
        (arr.includes("2") && arr.includes("5") && arr.includes("8")) ||
        (arr.includes("3") && arr.includes("6") && arr.includes("9")) ||
        (arr.includes("3") && arr.includes("5") && arr.includes("7")) ||
        (arr.includes("4") && arr.includes("5") && arr.includes("6")) ||
        (arr.includes("7") && arr.includes("8") && arr.includes("9"))
      ) {
        if (arr === this.player1Choices) {
          this.winner = "Player1 won!";
        } else if (arr === this.player2Choices) {
          this.winner = "Player2 won!";
        }
      } else {
        this.winner = "off";
      }
    },
    reset() {
      this.player1Choices = [];
      this.player2Choices = [];
      this.player1Move = true;
      this.player2Move = false;
      this.winner = "off";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Krona+One&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vw;
  font-family: "Krona One", sans-serif;
}

header {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  background-color: black;
}

.move {
  width: 50%;
  height: 100%;
  line-height: 100px;
  color: white;
  text-align: center;
  font-size: 40px;
  text-transform: uppercase;
  overflow: hidden;
}

.player1 {
  align-self: flex-start;
}

.player2 {
  align-self: flex-end;
}

.player1.inactive {
  color: #333;
}

.player2.inactive {
  color: #333;
}

main {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 600px;
  width: 600px;
  background-color: black;
}
.field {
  position: relative;
  width: 190px;
  height: 190px;
  background-color: #fff;
  cursor: pointer;
  transition: 0.1s linear;
}
.field:hover {
  background-color: #ddd;
}

.field img {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.reset {
  border: 0;
  height: 60px;
  width: 180px;
  font-family: "Krona One", sans-serif;
  font-size: 20px;
  background-color: #000;
  cursor: pointer;
  border-radius: 10px;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  transition: 0.1s linear;
  text-transform: uppercase;
}

.reset:hover {
  background-color: white;
  color: black;
  border: 2px solid black;
}

.cover {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}
.cover.off {
  display: none;
}
.result {
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  height: 400px;
  width: 600px;
  border-radius: 25px;
  background-color: black;
  z-index: 2;
}

.result.off {
  display: none;
}

.winner {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  height: 200px;
  width: 400px;
  background-color: #fff;
  border-radius: 25px;
  text-align: center;
  line-height: 200px;
  font-size: 35px;
  text-transform: uppercase;
}

.newGame {
  border: 0;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  height: 60px;
  width: 180px;
  font-family: "Krona One", sans-serif;
  font-size: 20px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 10px;
}

.newGame:hover {
  background-color: #ddd;
}
</style>
