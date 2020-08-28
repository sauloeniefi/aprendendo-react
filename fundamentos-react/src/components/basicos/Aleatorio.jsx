import React from "react";

export default (props) => {
  const { min, max } = props;

  const aleatorio = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor mínimo: </strong>
        {min}
      </p>
      <p>
        <strong>Valor máximo: </strong>
        {max}
      </p>
      <p>
        <strong>Valor sorteado: </strong>
        {aleatorio}
      </p>
    </div>
  );
};
