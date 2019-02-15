const store = {
    score: {
        state: 0,
        actions: setState => ({
            addScore: () => setState(state => state + 1),
            resetScore: () => setState(0),
        }),
    },
}

export default store