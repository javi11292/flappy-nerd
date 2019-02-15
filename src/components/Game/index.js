import React from "react"
import useHook from "./useHook"
import { withStyles, Paper } from "@material-ui/core"
import styles from "./styles"

const Game = React.memo(props => {
    const { parent, score, onClick } = useHook(props)
    return (
        <div
            onPointerDown={onClick}
            className={props.classes.canvas}
            ref={parent}>
            <Paper className={props.classes.score}>Score: {score}</Paper>
        </div>
    )
})

export default withStyles(styles)(Game)