const SEARCH_MUSIC = "SEARCH-MUSIC";
const DELETE_MUSIC = "DELETE-MUSIC";
const UPDATE_SEARCH_MUSIC_NAME = "UPDATE-SEARCH-MUSIC-NAME";

const musicReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_MUSIC:
      const newMusic = state.data.filter(
        (musicName) => musicName.name === state.searchMusicName
      );
      /*     const newState = { ...this._state, music: { data: newMusic } }; */
      state.searchMusicName = "";
      state.data = newMusic;
      return state;
    case DELETE_MUSIC:
      state.data.pop();
      return state;
    case UPDATE_SEARCH_MUSIC_NAME:
      state.searchMusicName = action.text;
      return state;
    default:
      return state;
  }
};
export default musicReducer;
