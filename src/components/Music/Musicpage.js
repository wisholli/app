import React from "react";
import style from "./Musicpage.module.css";
import Songname from "./Songsname/Songsname";

const Musicpage = (props) => {
  let songName = props.items.map((name) => <Songname songname={name.name} />);

  let newMusic = React.createRef();

  let searchMusic = () => {
    props.searchMusic();
  };

  let deleteMusic = () => {
    props.deleteMusic();
  };

  let onMusicChange = () => {
    let text = newMusic.current.value;
    props.updateSearchMusicName(text);
  };

  return (
    <div className={style.content}>
      <h1 className={style.title}>Music</h1>
      <div>
        <textarea
          onChange={onMusicChange}
          ref={newMusic}
          value={props.searchMusicName}
        />
        <button onClick={searchMusic}>Search music</button>
        <button onClick={deleteMusic}>Delete music</button>
        <p>{songName}</p>
      </div>
    </div>
  );
};

export default Musicpage;
