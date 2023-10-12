import { useState } from "react";
import "./app.css";

export default function Exemplo() {
  const [formData, setFormdata] = useState({
    nome: "",
    sobrenome: "",
  });
  const [seeUrl, setSeeUrl] = useState(null);

  function handleInput(name, value) {
    setFormdata({ ...formData, [name]: value });
  }

  function getDataFromApi(params) {
    const { nome, sobrenome } = params;

    //fetch(`https//:siteloko123&nome=${nome}&sobrenome=${sobrenome}`);

    setSeeUrl(`https//:siteloko123&nome=${nome}&sobrenome=${sobrenome}`);
  }

  return (
    <div className="main">
      <div className="input-div">
        <label>Nome</label>
        <input
          value={formData.nome}
          onChange={(x) => handleInput("nome", x.target.value)}
        />
      </div>
      <div className="input-div">
        <label>Sobrenome</label>
        <input
          value={formData.Sobrenome}
          onChange={(x) => handleInput("sobrenome", x.target.value)}
        />
      </div>
      <button onClick={() => getDataFromApi(formData)}>Pesquisar</button>

      {seeUrl && <span style={{ marginTop: 30 }}>Url:{seeUrl} </span>}
    </div>
  );
}
