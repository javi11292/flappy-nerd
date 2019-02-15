import React from "react"
import { withStyles, CssBaseline } from "@material-ui/core"
import Store from "components/Store"
import styles from "./styles"
import Game from "components/Game"

const App = props => (
    <Store>
        <CssBaseline />
        <div className={props.classes.body}>
            <Game />
        </div>
    </Store>
)

export default withStyles(styles)(App)