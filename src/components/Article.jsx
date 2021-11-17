import React from "react";
import { Link } from "react-router-dom";

export default function Article(props) {
  return (
    <React.Fragment>
      <div className="article_container">
        <div className="title_card">{props.titulo}</div>
        <div className="date_card">{props.fechaCreacion}</div>
        <span className="author_card">{props.autor}</span>

        <section className="category_card">{props.categoria}</section>

        <p className="content_card">{props.contenido}</p>
        <Link to={`/leer/articulo/${props.id}`}>
          <button className="see_more">Ver mas</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
