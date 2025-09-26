import { useState } from "react";
import styles from './index.css'

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();

    if (!altura || !peso) {
      alert("Preencha os campos corretamente!");
      return;
    }

    const alturaEmMetros = parseFloat(altura);
    const pesoEmKg = parseFloat(peso);

    const resultado = (pesoEmKg / (alturaEmMetros * alturaEmMetros)).toFixed(2);

    setImc(resultado);

    if (resultado < 18.5) {
      setClassificacao("Abaixo do peso ideal");
    } else if (resultado < 24.9) {
      setClassificacao("Peso normal");
    } else if (resultado < 29.9) {
      setClassificacao("Sobrepeso");
    } else if (resultado < 34.9) {
      setClassificacao("Obesidade grau I");
    } else if (resultado < 39.9) {
      setClassificacao("Obesidade grau II");
    } else {
      setClassificacao("Obesidade grau III");
    }
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>

      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (m): </label>
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>

        <div className="peso">
          <label>Peso (kg): </label>
          <input
            type="number"
            step="0.1"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>

        <button type="submit">
          Calcular
        </button>
      </form>

      {imc && (
        <div className="resposta">
          <h2>Seu IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;