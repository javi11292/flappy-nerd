import Phaser from "phaser"

class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, radius) {
        super(scene, scene.game.config.width / 5, scene.game.config.height / 5, "player")
        scene.add.existing(this)
        scene.physics.world.enable(this)
        this.body.setCollideWorldBounds(true)
        this.body.setCircle(radius * scene.game.config.width)
    }

    flap = () => {
        this.body.setVelocityY(-this.scene.game.config.height / 1.1)
    }

    preUpdate = () => {
        if (this.body.checkWorldBounds()) {
            this.scene.loser()
        }
    }
}

export default Player