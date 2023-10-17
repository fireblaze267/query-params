import { useEffect, useState } from "react";
import "./app.css";
import Cards from "./components/cards";
import { onlyNumbers } from "./utils/format";

export default function Exemplo() {
  const [data, setData] = useState([]);
  const [seeUrl, setSeeUrl] = useState(null);
  const [formData, setFormdata] = useState({
    size: "",
  });

  function handleInput(name, value) {
    setFormdata({ ...formData, [name]: value });
  }

  function getDataFromApi() {
    const { size } = formData;

    setSeeUrl(`https://jsonplaceholder.typicode.com/posts/${size}`);

    fetch(`https://jsonplaceholder.typicode.com/posts/${size}`)
      .then((response) => response.json())
      .then((json) => (Array.isArray(json) ? setData(json) : setData([json])));
  }

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className="main">
      {seeUrl && <span style={{ marginBottom: 30 }}>Url:{seeUrl} </span>}
      <div className="input-div">
        <label>id</label>
        <input
          value={formData.size}
          onChange={(x) => handleInput("size", onlyNumbers(x.target.value))}
        />
      </div>

      <button onClick={() => getDataFromApi()}>Pesquisar</button>

      <div className="cards-container">
        {data.map((x) => {
          return <Cards data={x} key={x?.id} />;
        })}
      </div>
    </div>
  );
}
