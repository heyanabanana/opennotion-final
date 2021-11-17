import React, { useEffect, useState } from "react";

import Article from "./Article";

export default function HomeList() {
  const [articles, setArticles] = useState([]);
  const [tagsData, setTagsData] = useState([]);

  useEffect(() => getArticles(), []);

  const getArticles = async () => {
    const articleResponse = await fetch(
      "https://notion-sinsecurity.herokuapp.com/api/articulos/mostrar"
    );
    const tagsResponse = await fetch(
      "https://notion-sinsecurity.herokuapp.com/api/categorias/mostrar"
    );

    const data = await articleResponse.json();
    const dataTags = await tagsResponse.json();

    setArticles(data);

    setTagsData(dataTags);
  };

  return (
    <div className="list-container">
      {articles.map((article, index) => (
        <Article
          id={article.id}
          titulo={article.titulo}
          autor={article.autor}
          imagen={article.rutaImagen}
          fechaCreacion={article.fechaCreacion}
          contenido={article.contenido}
        />
      ))}
    </div>
  );
}
