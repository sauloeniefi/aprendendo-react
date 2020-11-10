import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [a, b] = [1, 2];
  let [nome, setNome] = useState("?");
  let [idade, setIdade] = useState(0);
  let [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <span>{nome} </span>
      <span>{idade} </span>
      <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
