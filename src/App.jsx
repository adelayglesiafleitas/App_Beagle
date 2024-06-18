import { useState, useEffect } from "react";
import Main from "./componets/Main.jsx";
import "./componets/style/Water.css";
import GetGifs from "./services/GetGifs";
import "./App.css";

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("beagle Happy");
  const [cantGifs, setCantGifs] = useState(5);

  useEffect(() => {
    GetGifs({ keyword, cantGifs }).then((gifs) => setGifs(gifs)); // para pasar un parametro por keyword
  }, []);
  console.log(gifs);

  const handleSumit = (e) => {
    e.preventDefault();
    const selectedKeyword = e.target.elements.keyword.value;
    const selectedCantGifs = parseInt(e.target.elements.cantGifs.value, 10);
    setKeyword(selectedKeyword);
    setCantGifs(selectedCantGifs);
    GetGifs({ keyword, cantGifs }).then((gifs) => setGifs(gifs)); // para pasar un parametro por keyword
  };

  return (
    <>
      <header>
        <h1>App de Beagles</h1>
        <form onSubmit={handleSumit}>
          <select name="keyword">
            <option value="beagle Happy">Feliz</option>
            <option value="beagle Run">Corriendo</option>
            <option value="beagle kiss">Besitos</option>
          </select>
          <input type="number" name="cantGifs" defaultValue={5} min={1} />
          <button type="submit">Aseptar</button>
        </form>

        <hr />
      </header>
      <Main gifs={gifs} />
    </>
  );
};

export default App;
