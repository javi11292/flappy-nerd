import { useEffect, useRef } from "react"
import Phaser from "phaser"
import GameScene from "gameScenes/Game"
import { context } from "components/Store"

function useHook(props) {
    useEffect(loadGame, [])
    const gameRef = useRef()
    const parent = useRef()
    const { score, addScore, resetScore } = context.useScore()

    function loadGame() {
        const sWidth = window.innerWidth
        const sHeight = window.innerHeight
        const ratio = sWidth / sHeight
        const wRatio = 16 / 9

        const width = ratio < wRatio ? sWidth : (wRatio * sHeight)
        const height = width / wRatio

        const config = {
            parent: parent.current,
            type: Phaser.AUTO,
            width,
            height,
            resolution: 5,
            canvasStyle: "display: block",
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: height * 3 }
                }
            },
        }

        const game = new Phaser.Game(config)
        game.scene.add("Game", new GameScene({ addScore, resetScore }), true)
        gameRef.current = game
    }

    function onClick({ target }) {
        if (target !== parent.current) return
        gameRef.current.scene.getScene("Game").input.emit("pointerdown")
    }

    return { parent, score, onClick }
}

export default useHook