import "./style/Main.css";
function Main({ gifs }) {
  return (
    <main className="container_main">
      {gifs.length === 0 ? (
        <p>
          se esta cargando el <strong>Perritos</strong>
        </p>
      ) : (
        gifs.gits.map((simpleGifs) => (
          <div className="image_container" key={simpleGifs.id}>
            <h4>{simpleGifs.title}</h4>
            <img src={simpleGifs.url} alt={simpleGifs.title} />
          </div>
        ))
      )}
    </main>
  );
}

export default Main;
