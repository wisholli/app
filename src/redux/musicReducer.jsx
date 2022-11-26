const SEARCH_MUSIC = "SEARCH-MUSIC";
const DELETE_MUSIC = "DELETE-MUSIC";
const UPDATE_SEARCH_MUSIC_NAME = "UPDATE-SEARCH-MUSIC-NAME";

let initialState = {
  data: [
    {
      id: 1,
      name: "Weekend - Bright lights",
    },
    {
      id: 2,
      name: "Ghost - Marry on a cross",
    },
    {
      id: 3,
      name: "Maneskin - Beggin",
    },
  ],
  searchMusicName: "",
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MUSIC:
      const newMusic = state.data.filter(
        (musicName) => musicName.name === state.searchMusicName
      );

      return { ...state, data: [...newMusic], searchMusicName: "" };
    case DELETE_MUSIC:
      let deleteMusic = [...state.data];
      deleteMusic.pop();
      return { ...state, data: [...deleteMusic] };
    case UPDATE_SEARCH_MUSIC_NAME:
      return { ...state, searchMusicName: action.text };
    default:
      return state;
  }
};

export const searchMusic = () => ({
  type: SEARCH_MUSIC,
});
export const deleteMusic = () => ({
  type: DELETE_MUSIC,
});
export const updateSearchMusicName = (text) => ({
  type: UPDATE_SEARCH_MUSIC_NAME,
  text,
});

export default musicReducer;
