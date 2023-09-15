import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const PlayLists = () => {
  // const { playlistIds } = useSelector((state) => state.player);
  // const [songsData, setSongsData] = useState([]);
  // const [loading, setLoading] = useState(true); // Add loading state

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (playlistIds) {
  //         const songDetailsPromises = playlistIds.map(async (songid) => {
  //           console.log(
  //             "🚀 ~ file: PlayLists.jsx:15 ~ songDetailsPromises ~ songid:",
  //             songid
  //           );
  //           const { data } = await useGetSongDetailsQuery({ songid });
  //           console.log(
  //             "🚀 ~ file: PlayLists.jsx:16 ~ songDetailsPromises ~ data:",
  //             data
  //           );
  //           return data;
  //         });

  //         const songDetails = await Promise.all(songDetailsPromises);
  //         console.log(
  //           "🚀 ~ file: PlayLists.jsx:24 ~ fetchData ~ songDetails:",
  //           songDetails
  //         );
  //         setSongsData(songDetails);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <p className="text-xl">Loading...</p>;
  // }

  return <div>{/* Render songsData here */}</div>;
};

export default PlayLists;
