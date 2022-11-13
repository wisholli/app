import React from "react";
import { connect } from "react-redux";
import {
  deleteMusicAC,
  searchMusicAC,
  updateSearchMusicNameAC,
} from "../../redux/musicReducer";
import style from "./Musicpage.module.css";
import Songname from "./Songsname/Songsname";

const mapStateToProps = (state) => ({
  music: state.music.data,
  searchMusicName: state.music.searchMusicName,
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchMusic: () => {
      dispatch(searchMusicAC());
    },
    deleteMusic: () => {
      dispatch(deleteMusicAC());
    },
    onMusicChange: (text) => {
      dispatch(updateSearchMusicNameAC(text));
    },
  };
};

const MusicPage = (props) => {
  let music = props.music;

  let songName = music.map((name) => <Songname songname={name.name} />);

  let searchMusic = () => {
    props.searchMusic();
  };

  let deleteMusic = () => {
    props.deleteMusic();
  };

  let onMusicChange = (e) => {
    let text = e.target.value;
    props.onMusicChange(text);
  };

  return (
    <div className={style.content}>
      <h1 className={style.title}>Music</h1>
      <div>
        <textarea onChange={onMusicChange} value={music.searchMusicName} />
        <button onClick={searchMusic}>Search music</button>
        <button onClick={deleteMusic}>Delete music</button>
        <p>{songName}</p>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPage);
