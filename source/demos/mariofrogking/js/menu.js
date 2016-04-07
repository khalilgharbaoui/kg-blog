window.onload = function() {
    document.addEventListener("tizenhwkey", function(b) {
        if (b.keyName == "back") {
            tizen.application.getCurrentApplication().exit();
        }
    });
};
Game.Menu = function(a) {};
Game.Menu.prototype = {
    create: function() {
        game.add.sprite(2, 5, "title");
        game.add.text(Math.floor(w / 2) + 0, 100, "Jump as high as possible", {
            font: "24px Arial",
            fill: "#fff",
            align: "center"
        }).anchor.setTo(0.5, 0.5);
        if (this.game.device.desktop) {
            var a = "Touch To Start!";
        } else {
            var a = "Touch To Start!";
        }
        label2 = game.add.text(Math.floor(w / 2) + 0, h - 50 + 0.5, a, {
            font: "35px Arial",
            fill: "#fff",
            align: "center"
        });
        label2.anchor.setTo(0.5, 0.5);
        game.add.tween(label2).to({
            angle: 1
        }, 300, Phaser.Easing.Linear.None).to({
            angle: -1
        }, 300, Phaser.Easing.Linear.None).loop().start();
        this.mario = this.game.add.sprite(w / 2, h / 2 - 50, "mario");
        this.mario.body.gravity.y = 12;
        this.mario.anchor.setTo(0.5, 1);
        this.mario.frame = 1;
        this.platform = this.game.add.sprite(w / 2, h / 2 + 150, "platform");
        this.platform.anchor.setTo(0.5, 0.5);
        this.platform.body.immovable = true;
        this.cursor = this.game.input.keyboard.createCursorKeys();
    },
    update: function() {
        game.physics.collide(this.mario, this.platform);
        if (this.mario.body.touching.down && this.mario.scale.y == 1) {
            var a = game.add.tween(this.mario.scale).to({
                y: 0.7,
                x: 1.3
            }, 150, Phaser.Easing.Linear.None).start();
            a.onComplete.add(function() {
                this.mario.scale.setTo(1, 1);
                this.mario.body.velocity.y = -500;
            }, this);
        }
        if (this.cursor.up.isDown || game.input.activePointer.isDown) {
            game.state.start("Play");
        }
    },
    toggle_sound: function() {
        if (this.sound_toggle.frame == 0) {
            this.sound_toggle.frame = 1;
            sound = false;
        } else {
            this.sound_toggle.frame = 0;
            sound = true;
        }
    },
    shutdown: function() {
        game.world.removeAll();
    }
};