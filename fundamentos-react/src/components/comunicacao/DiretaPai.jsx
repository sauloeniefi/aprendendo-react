import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Roberta" idade={20} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Gustavo" idade={17} nerd={false}></DiretaFilho>
    </div>
  );
};
