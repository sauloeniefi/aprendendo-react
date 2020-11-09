import React from "react";

export default (props) => {
  const callback = props.quandoClicar;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(e) => {
          callback("Aldino", 46, true);
        }}
      >
        Fornecer informações
      </button>
    </div>
  );
};
