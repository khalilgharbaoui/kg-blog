Game.Play = function(a) {};
Game.Play.prototype = {
    create: function() {
        this.game.world.setBounds(0, -100000, w, h + 100000);
        this.cursor = this.game.input.keyboard.createCursorKeys();
        this.wolks = game.add.group();
        this.wolks.createMultiple(6, "wolk");
        this.wolks.setAll("outOfBoundsKill", true);
        if (score > best_score) {
            best_score = score;
        }
        score = 0;
        this.platforms = game.add.group();
        this.platforms.createMultiple(15, "platform");
        this.platforms.setAll("body.immovable", true);
        this.platforms.setAll("body.allowCollision.down", false);
        this.platforms.setAll("body.allowCollision.right", false);
        this.platforms.setAll("body.allowCollision.left", false);
        this.hearts = game.add.group();
        this.hearts.createMultiple(3, "heart");
        this.spikes = game.add.group();
        this.spikes.createMultiple(5, "spike");
        this.emitter = game.add.emitter(0, 0, 100);
        this.emitter.x = -100;
        this.emitter.on = false;
        this.emitter.makeParticles("star2");
        this.emitter.gravity = 10;
        this.emitter.start(false, 1000, 15, 0);
        this.emitter.width = 60;
        this.mario = this.game.add.sprite(w / 2 + 100, h - 200, "mario");
        this.mario.body.gravity.y = 12;
        this.mario.anchor.setTo(0.5, 1);
        this.ground = this.game.add.sprite(0, h / 3 + 55, "ground");
        this.ground.scale.setTo(10, 1);
        this.ground.body.immovable = true;
        this.ground.outOfBoundsKill = true;
        this.score_label = game.add.text(10, 10, "0", {
            font: "28px Arial",
            fill: "#fff"
        });
        this.jump_s = game.add.audio("jump");
        this.heart_s = game.add.audio("heart");
        this.hit_s = game.add.audio("hit");
        this.music_s = game.add.audio("music");
        if (sound) {
            this.music_s.play("", 0, 0.2, true);
        }
        this.maxX = h / 2 - 20;
        this.next_platform = 10;
        this.next_wolk = 50;
        this.took_heart = false;
        this.count_update = 0;
        this.init_level();
    },
    update: function() {
        if (this.mario.alive) {
            if (this.ground.alive) {
                game.physics.collide(this.mario, this.ground);
            }
            game.physics.collide(this.mario, this.platforms);
            game.physics.overlap(this.mario, this.hearts, this.take_heart, null, this);
            game.physics.overlap(this.mario, this.spikes, this.take_spike, null, this);
        }
        if (this.mario.body.y < this.game.camera.y + h / 2) {
            this.move_screen_up();
            this.generate_level();
        }
        if (this.count_update == 20) {
            this.count_update = 0;
            this.platforms.forEachAlive(this.update_platform, this);
            this.hearts.forEachAlive(this.update_heart, this);
            this.spikes.forEachAlive(this.update_spike, this);
        } else {
            this.count_update += 1;
        }
        this.mario_move();
    },
    init_level: function() {
        this.add_platform(h - 150, 100);
        this.add_platform(h - 300, 200);
        this.add_platform(h - 450, 300);
        this.add_platform(h - 550, 300);
        this.add_wolk(h - 300);
        this.add_wolk(h - 500);
    },
    generate_level: function() {
        if (this.next_platform < -this.game.camera.y) {
            if (score < 250) {
                var c = [1, 1, 1, 1, 2, 2, 2, 3, 5, 5];
            } else {
                if (score < 500) {
                    var c = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5];
                } else {
                    if (score < 1000) {
                        var c = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5];
                    } else {
                        if (score < 2000) {
                            var c = [1, 2, 3, 3, 3, 4, 4, 4, 4, 5];
                        } else {
                            if (score < 3000) {
                                var c = [2, 3, 3, 3, 4, 4, 4, 4, 4, 5];
                            } else {
                                var c = [2, 3, 3, 4, 4, 4, 4, 4, 4, 4];
                            }
                        }
                    }
                }
            }
            var a = c[rand(c.length)];
            var b = this.game.camera.y - 30;
            this.next_platform += rand(80) + 100;
            if (a == 1) {
                this.add_platform_double(b);
            } else {
                if (a == 2) {
                    this.add_platform(b);
                } else {
                    if (a == 3) {
                        this.add_platform_moving(b);
                    } else {
                        if (a == 4) {
                            if (rand(3) > 0) {
                                this.add_platform_moving(b);
                            } else {
                                this.add_platform_double(b);
                            }
                            this.add_platform_spike(b - 150);
                            this.next_platform += 150;
                        } else {
                            if (a == 5) {
                                this.add_platform_heart(b);
                            }
                        }
                    }
                }
            }
        }
        if (this.next_wolk < -this.game.camera.y) {
            this.add_wolk(this.game.camera.y - 70);
            this.next_wolk += 100 + rand(200);
        }
    },
    move_screen_up: function() {
        var a = this.game.camera.y + Math.floor(h / 2) - this.mario.body.y;
        this.game.camera.y -= a;
        this.score_label.y = this.game.camera.y + 10;
        score = -Math.floor(this.game.camera.y / 10);
        this.score_label.content = score;
    },
    mario_move: function() {
        if (this.mario.body.y > this.game.camera.y + h + 200) {
            this.music_s.stop();
            game.state.start("Dead");
            return;
        }
        if (this.mario.x < 20) {
            this.mario.x = 20;
        } else {
            if (this.mario.x > w - 20) {
                this.mario.x = w - 20;
            }
        } if (this.mario.body.touching.down && this.mario.scale.y == 1) {
            if (sound) {
                this.jump_s.play("", 0, 0.15, false);
            }
            if (this.mario.scale.x == 1) {
                var d = 1.3;
            } else {
                var d = -1.3;
            }
            var b = game.add.tween(this.mario.scale).to({
                y: 0.7,
                x: d
            }, 150, Phaser.Easing.Linear.None).start();
            b.onComplete.add(function() {
                if (this.mario.scale.x == 1) {
                    this.mario.scale.setTo(1, 1);
                } else {
                    this.mario.scale.setTo(-1, 1);
                }
                this.mario.body.velocity.y = -500;
            }, this);
        }
        this.mario.body.velocity.x = 0;
        var a = game.input.activePointer.isDown && game.input.activePointer.x > w / 2;
        var c = game.input.activePointer.isDown && game.input.activePointer.x < w / 2;
        if ((this.cursor.left.isDown || c) && this.mario.alive) {
            this.mario.frame = 0;
            this.mario.body.velocity.x = -300;
            if (this.mario.scale.x == 1) {
                this.mario.scale.setTo(-1, 1);
            }
        } else {
            if ((this.cursor.right.isDown || a) && this.mario.alive) {
                this.mario.frame = 0;
                this.mario.body.velocity.x = 300;
                if (this.mario.scale.x == -1) {
                    this.mario.scale.setTo(1, 1);
                }
            } else {
                this.mario.frame = 1;
            }
        } if (this.mario.body.velocity.y > -200) {
            this.took_heart = false;
            this.emitter.on = false;
        }
        this.emitter.x = this.mario.x;
        this.emitter.y = this.mario.y - 15;
    },
    add_platform: function(c, b) {
        var a = this.platforms.getFirstExists(false);
        if (a) {
            b = typeof b !== "undefined" ? b : rand(w - a.width - 10) + a.width / 2 + 5;
            a.reset(b, c);
            a.anchor.setTo(0.5, 0.5);
            a.body.velocity.x = 0;
            return a;
        } else {
            console.log("plat");
        }
    },
    add_platform_double: function(a) {
        this.add_platform(a);
        this.add_platform(a);
    },
    add_platform_heart: function(c) {
        var b = this.add_platform(c);
        var a = this.hearts.getFirstExists(false);
        if (a) {
            a.anchor.setTo(0.5, 0.5);
            a.reset(b.x, c - 29);
        }
    },
    add_platform_spike: function(b) {
        var a = this.add_platform(b);
        this.add_spike(a.x, a.y + 18);
    },
    add_platform_moving: function(b) {
        var a = this.add_platform(b);
        if (rand(2) == 0) {
            a.body.velocity.x = -120;
        } else {
            a.body.velocity.x = 120;
        }
    },
    add_wolk: function(b) {
        var a = this.wolks.getFirstExists(false);
        if (a) {
            a.reset(rand(w) - a.width, b);
            if (rand(2) == 1) {
                a.body.velocity.x = 8;
            } else {
                a.body.velocity.x = -8;
            }
        } else {
            console.log("wolk");
        }
    },
    add_spike: function(a, c) {
        var b = this.spikes.getFirstExists(false);
        if (b) {
            b.body.setSize(b.width - 6, b.height - 6, 0, 0);
            b.anchor.setTo(0.5, 0.5);
            b.reset(a, c);
        } else {
            console.log("spike");
        }
    },
    update_platform: function(a) {
        if (a.x + a.width / 2 >= w && a.body.velocity.x > 0) {
            a.body.velocity.x = -120;
        } else {
            if (a.x - a.width / 2 <= 0 && a.body.velocity.x < 0) {
                a.body.velocity.x = 120;
            }
        } if (a.y - a.height > this.game.camera.y + h) {
            a.kill();
        }
    },
    update_heart: function(a) {
        if (a.y - a.height > this.game.camera.y + a) {
            a.kill();
        }
    },
    update_spike: function(a) {
        if (a.y - a.height > this.game.camera.y + h) {
            a.kill();
        }
    },
    take_heart: function(b, a) {
        a.kill();
        if (sound) {
            this.heart_s.play("", 0, 0.2, false);
        }
        this.emitter.on = true;
        this.mario.body.velocity.y = -750;
        this.took_heart = true;
    },
    take_spike: function(b, a) {
        if (!this.took_heart) {
            if (sound) {
                this.hit_s.play("", 0, 0.4, false);
            }
            this.mario.alive = false;
            this.mario.body.velocity.y = -300;
        }
    },
    shutdown: function() {
        game.world.removeAll();
    }
};