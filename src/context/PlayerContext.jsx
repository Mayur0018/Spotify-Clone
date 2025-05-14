import { createContext } from "react";
import { useRef } from "react";
export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekbg = useRef();
  const seekbar = useRef();
  const contextValue = {
    audioRef,
    seekbar,
    seekbg,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
