import { useEffect, useState } from "react";
import "./app.css";
import Cards from "./components/cards";

export default function Exemplo() {
  const [data, setData] = useState([]);
  const [seeUrl, setSeeUrl] = useState(null);
  const [formData, setFormdata] = useState({
    size: "",
  });

  function handleInput(name, value) {
    setFormdata({ ...formData, [name]: value });
  }
  const filtro = data.filter((x) => {
    return x.title.includes(formData.size) || x.id == formData.id;
  });

  function getDataFromApi() {
    setSeeUrl(`https://jsonplaceholder.typicode.com/posts/`);

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => (Array.isArray(json) ? setData(json) : setData([json])));
  }

  useEffect(() => {
    getDataFromApi();
  }, []);

  console.log(filtro);

  return (
    <div className="main">
      {seeUrl && <span style={{ marginBottom: 30 }}>Url: {seeUrl} </span>}
      <div className="input-div">
        <label>id</label>
        <input
          value={formData.size}
          onChange={(x) => handleInput("size", x.target.value)}
        />
      </div>

      <button onClick={() => getDataFromApi()}>Pesquisar</button>

      <div className="cards-container">
        {filtro.length > 0
          ? filtro.map((x) => {
              return <Cards data={x} key={x?.id} />;
            })
          : data.map((x) => {
              return <Cards data={x} key={x?.id} />;
            })}
      </div>
    </div>
  );
}
