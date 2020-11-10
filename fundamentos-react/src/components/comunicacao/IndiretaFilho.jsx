import React from "react";

export default (props) => {
  const callback = props.quandoClicar;
  const min = 50;
  const max = 70;
  const gerarIdade = () => parseInt(Math.random() * 20) + 50;
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => callback("Aldino", gerarIdade, gerarNerd)}>
        Fornecer informações
      </button>
    </div>
  );
};
