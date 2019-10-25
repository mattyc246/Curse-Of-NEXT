import { decorate, observable } from "mobx";

class GameStore {
  seconds = 0;
  minutes = 0;
  timer;
  inPlay = false;
  // timer = setInterval(() => {
  //   this.time += 1;
  // }, 1000);

  startTimer = () => {
    this.timer = setInterval(() => {
      if (this.seconds === 59) {
        this.minutes += 1;
        this.seconds = 0;
      } else {
        this.seconds += 1;
      }
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  startPlaying = () => {
    this.inPlay = true;
  };
}

decorate(GameStore, {
  seconds: observable,
  timer: observable,
  inPlay: observable
});

const gameStore = new GameStore();

export default gameStore;
