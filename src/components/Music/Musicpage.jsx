import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMusic,
  searchMusic,
  updateSearchMusicName,
} from "../../redux/musicReducer";
import style from "./Musicpage.module.css";
import Songname from "./Songsname/Songsname";

const MusicPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.music);

  let songName = data.data.map((name) => <Songname songname={name.name} />);

  let searchOneMusic = () => {
    dispatch(searchMusic());
  };

  let deleteOneMusic = () => {
    dispatch(deleteMusic());
  };

  let onMusicChange = (e) => {
    dispatch(updateSearchMusicName(e.target.value));
  };

  return (
    <div className={style.content}>
      <h1 className={style.title}>Music</h1>
      <div>
        <textarea onChange={onMusicChange} value={data.searchMusicName} />
        <button onClick={searchOneMusic}>Search music</button>
        <button onClick={deleteOneMusic}>Delete music</button>
        <p>{songName}</p>
      </div>
    </div>
  );
};

export default MusicPage;
