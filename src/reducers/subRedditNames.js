const INIT_STATE = {
    subRedditNames: [
        "alternativeart", "pics", "gifs", "adviceanimals", "cats", "images", "photoshopbattles", "hmmm", "all", "aww"
    ]
}

const subRedditNamesReducer = (state= INIT_STATE, action) => {
    switch (action.type) {
        default: return state;
      }
}

export default subRedditNamesReducer;