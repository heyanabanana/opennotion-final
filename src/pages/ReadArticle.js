import React, { useState, useEffect } from "react";

import "../styles/article.css";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ReadArticle() {
  const { id_articulo } = useParams();

  const [article, setArticle] = useState([]);
  useEffect(() => getArticle(), []);

  const getArticle = async () => {
    const articleResponse = await fetch(
      "https://notion-sinsecurity.herokuapp.com/api/articulos/mostrar/" +
        parseInt(id_articulo)
    );
    const data = await articleResponse.json();
    setArticle(data);
  };

  return (
    <div className="article-container">
      <h2 className="article-title">{article.titulo}</h2>
      <h6 className="article-date">{article.fechaCreacion}</h6>
      <h6 className="article-author">{article.autor}</h6>
      <section className="article-category">{article.contenido}</section>
      <Link to={`/edit/articulo/${article.id}`}>
        <button className="article-edit">Editar</button>
      </Link>
    </div>
  );
}
