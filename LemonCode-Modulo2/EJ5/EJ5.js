// SlothMachine
class SlothMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const result = [
      Math.random() >= 0.5,
      Math.random() >= 0.5,
      Math.random() >= 0.5,
    ];

    if (result.every(Boolean)) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
