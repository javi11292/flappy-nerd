import Phaser from "phaser"

class Pipe extends Phaser.GameObjects.Sprite {
    constructor(scene, height, addScore, difficulty) {
        super(scene, scene.game.config.width * 1.5, height, "pipe")
        scene.add.existing(this)
        scene.physics.world.enable(this)
        this.body.allowGravity = false
        this.body.setVelocityX(-scene.game.config.width * difficulty / 3)
        this.body.setImmovable(true)
        this.addScore = addScore
    }

    preUpdate = () => {
        if (this.body.position.x < -100) {
            this.addScore()
            this.destroy()
        }
    }
}

export default Pipe