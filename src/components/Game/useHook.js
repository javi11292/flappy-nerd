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
        const config = {
            parent: parent.current,
            type: Phaser.AUTO,
            width: 1920,
            height: 1080,
            scale: {
                mode: Phaser.Scale.FIT,
            },
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 1080 * 3 }
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