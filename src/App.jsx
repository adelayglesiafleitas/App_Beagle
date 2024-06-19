import { useState, useEffect } from "react";
import "./componets/style/Water.css";
import Main from "./componets/Main.jsx";
import Header from "./componets/Header.jsx";
import "./App.css";

const App = () => {
  const [gifs, setGifs] = useState([]);

  return (
    <>
      <Header gifs={gifs} setGifs={setGifs} />
      <Main gifs={gifs} />
    </>
  );
};

export default App;
