import React from "react";
import Navbar from "./Navbar";
import AllbumIteams from "./AllbumIteams";
import { albumsData } from "../assets/assets";
import SongItem from "./SongItem";
import { songsData } from "../assets/assets";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className=" mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AllbumIteams
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className=" mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
