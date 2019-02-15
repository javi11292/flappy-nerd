import Phaser from "phaser"
import Player from "gameObjects/Player"
import Pipe from "gameObjects/Pipe"

const PLAYER_RADIUS = 0.03
const PIPE_WIDTH = 0.1
const PIPE_HEIGHT = 1
const BREAK_HEIGHT = 0.2

class Game extends Phaser.Scene {
    constructor({ addScore, resetScore }) {
        super()
        this.addScore = addScore
        this.resetScore = resetScore
    }

    preload = () => {
        const width = this.game.config.width
        this.make.graphics().fillStyle(0x0000AA)
            .fillCircle(PLAYER_RADIUS * width, PLAYER_RADIUS * width, PLAYER_RADIUS * width)
            .generateTexture("player", PLAYER_RADIUS * 2 * width, PLAYER_RADIUS * 2 * width)

        this.make.graphics().fillStyle(0x00AA00).fillRect(0, 0, PIPE_WIDTH * width, PIPE_HEIGHT * width)
            .generateTexture("pipe", PIPE_WIDTH * width, PIPE_HEIGHT * width)

        this.add.graphics().fillStyle(0xCCCCCC).fillRect(0, 0, width, this.game.config.height)
    }

    create = () => {
        this.isDead = false
        this.difficulty = 1
        this.resetScore()
        this.player = new Player(this, PLAYER_RADIUS)
        this.pipes = this.add.group(this)
        this.physics.add.collider(this.player, this.pipes, this.loser)

        this.input.on("pointerdown", this.player.flap)
        this.input.keyboard.on("keydown-SPACE", this.player.flap)
    }

    update = () => {
        if (this.isDead) return
        const width = this.game.config.width
        const lastPipe = this.pipes.getLast(true)
        if (!lastPipe || lastPipe.body.position.x < this.game.config.width) {
            const spaceHeight = random(this.game.config.height, this.game.config.width, this.difficulty)
            this.pipes.add(new Pipe(this, spaceHeight + BREAK_HEIGHT * width / (2 * this.difficulty) + PIPE_HEIGHT * width / 2, this.addScore, this.difficulty))
                .add(new Pipe(this, spaceHeight - PIPE_HEIGHT * width / 2 - BREAK_HEIGHT * width / (2 * this.difficulty), () => { }, this.difficulty))

            if (this.difficulty < 2) {
                this.difficulty = this.difficulty + 0.01
            }
        }
    }

    loser = () => {
        this.game.scene.stop("Game")
        this.isDead = true
        setTimeout(() => {
            this.game.scene.start("Game")
        }, 1000)
    }
}

function random(height, width, difficulty) {
    const margin = BREAK_HEIGHT * width / (2 * difficulty)
    const random = Math.random()
    const result = random * (height - margin * 2) + margin
    return result
}

export default Game