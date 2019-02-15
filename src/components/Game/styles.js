export default theme => ({
    canvas: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        position: "relative",
    },
    score: {
        position: "absolute",
        fontSize: "2em",
        top: 0,
        left: 0,
        width: 200,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        userSelect: "none",
    },
})