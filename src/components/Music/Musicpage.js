import React from "react";
import {
  deleteMusicActionCreator,
  searchMusicActionCreator,
  updateSearchMusicNameActionCreator,
} from "../../redux/state";
import style from "./Musicpage.module.css";
import Songname from "./Songsname/Songsname";

const Musicpage = (props) => {
  let music = props.store.getState().music;

  let songName = music.data.map((name) => <Songname songname={name.name} />);

  let newMusic = React.createRef();

  let searchMusic = () => {
    props.dispatch(searchMusicActionCreator());
  };

  let deleteMusic = () => {
    props.dispatch(deleteMusicActionCreator());
  };

  let onMusicChange = () => {
    let text = newMusic.current.value;
    props.dispatch(updateSearchMusicNameActionCreator(text));
  };

  return (
    <div className={style.content}>
      <h1 className={style.title}>Music</h1>
      <div>
        <textarea
          onChange={onMusicChange}
          ref={newMusic}
          value={music.searchMusicName}
        />
        <button onClick={searchMusic}>Search music</button>
        <button onClick={deleteMusic}>Delete music</button>
        <p>{songName}</p>
      </div>
    </div>
  );
};

export default Musicpage;
