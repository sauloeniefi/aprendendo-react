import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const listaProdutos = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    );
  });

  return <table border="1">{listaProdutos}</table>;
};
