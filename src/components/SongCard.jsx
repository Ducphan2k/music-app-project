import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";

import PlayPause from "./PlayPause";
import {
  playPause,
  setActiveSong,
  addSongToPlaylist,
} from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  console.log("🚀 ~ file: SongCard.jsx:14 ~ SongCard ~ song:", song);
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          alt="song_img"
          src={song.images?.coverart}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="mt-4 flex flex-col">
          <p className="font-semibold text-lg text-white truncate">
            <Link to={`/songs/${song?.key}`}>{song.title}</Link>
          </p>
          <p className="text-sm truncate text-gray-300 mt-1">
            <Link
              to={
                song.artists
                  ? `/artists/${song?.artists[0]?.adamid}`
                  : "/top-artists"
              }
            >
              {song.subtitle}
            </Link>
          </p>
        </div>
        <button
          onClick={() => dispatch(addSongToPlaylist(song.key))}
          title="Add to playlist"
        >
          <AiFillHeart className="text-xl text-white transition hover:scale-125 hover:text-red-500 hover:shadow-xl" />
        </button>
      </div>
    </div>
  );
};

export default SongCard;
