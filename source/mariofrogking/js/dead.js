Game.Dead = function(a) {};
Game.Dead.prototype = {
  create: function() {
    game.add.text(Math.floor(w / 2) + 0, 18, "oeps, you fell down!", {
      font: "24px Arial",
      fill: "#ff0000",
      align: "center"
    }).anchor.setTo(0.5, 0.5);
    game.add.text(Math.floor(w / 2) + 0, 55, "your score: " + score + "\nbest score: " + best_score, {
      font: "28px Arial bold",
      fill: "#fff",
      align: "center"
    }).anchor.setTo(0.5, 0.5);
    if (this.game.device.desktop) {
      var a = "Touch To Play Again";
    } else {
      var a = "Touch To Play Again";
    }
    label = game.add.text(Math.floor(w / 2) + 0, 200, a, {
      font: "31px Arial bold",
      fill: "#fff",
      align: "center"
    });
    label.anchor.setTo(0.5, 0.5);
    game.add.tween(label).to({
      angle: 1
    }, 300, Phaser.Easing.Linear.None).to({
      angle: -1
    }, 300, Phaser.Easing.Linear.None).loop().start();
    mario = this.game.add.sprite(w / 2, h + h, "mario_zoom");
    mario.anchor.setTo(0.5, 1);
    game.add.tween(mario).to({
      y: h
    }, 2000, Phaser.Easing.Bounce.Out).start();
    if (sound) {
      game.add.audio("dead").play("", 0, 0.3, false);
    }
    this.cursor = this.game.input.keyboard.createCursorKeys();
  },
  update: function() {
    if (this.cursor.up.isDown || game.input.activePointer.isDown) {
      game.state.start("Play");
    }
  },
  shutdown: function() {
    game.world.removeAll();
  }
};
