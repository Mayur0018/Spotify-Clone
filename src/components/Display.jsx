import React from "react";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { albumsData } from "../assets/assets";
const Display = () => {
  const displyRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId).bgColor];
  console.log(bgColor);

  return (
    <div
      ref={displyRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg-[w-75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />}></Route>
        <Route path="/albums/:id" element={<DisplayAlbum />}></Route>
      </Routes>
    </div>
  );
};

export default Display;
