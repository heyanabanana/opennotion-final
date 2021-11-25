import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import MarkdownPreview from "@uiw/react-markdown-preview";
import rehypeHighlight from "rehype-highlight";
import "../styles/editarticle.css";
import "../styles/textEditor.css";

import API from "../utils/API";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

export default function EditArticle() {
  const navigate = useNavigate();
  const { id_articulo } = useParams();

  const [article, setArticle] = useState([]);
  useEffect(() => getArticle());

  const [contenido, setContenido] = useState();
  const [titulo, setTitulo] = useState();
  
  const getArticle = async () => {
    const articleResponse = await fetch(
      "https://notion-sinsecurity.herokuapp.com/api/articulos/mostrar/" +
        parseInt(id_articulo)
    );
    const data = await articleResponse.json();
    setArticle(data);

    setTitulo(data.titulo);
    setContenido(data.contenido);
  };

  function changeTitulo(event) {
    event.preventDefault();
    
    let titulo = event.target.value;
    
    API.put(`articulos/modificar/${parseInt(id_articulo)}`, { id: parseInt(id_articulo), titulo: titulo }).then(
      (res) => {
        console.log(res);
        console.log(res.data);
      },
      axiosConfig
    );
  };

  function deleteArticle() {
    if (window.confirm("¿Estás seguro que quieres borrar este artículo?")) {
      API.delete(
        `articulos/eliminar/${parseInt(id_articulo)}`
      )
        .then(() => console.log("articulo eliminado"))
        .catch((err) => console.log(err));

      alert("El artículo ha sido borrado. Ahora podrás crear uno nuevo");
      // Go back to Index page:
      navigate("/");
    } else {
      console.log("anulada operacion");
    }
  }

  return (
    <React.Fragment>
      <form  className="markdown-editor-post">
        <label>
          <input
            isRequired={true}
            type="text"
            className="editor_title"
            defaultValue={titulo}
            onChange={(e) => setTitulo(e)}
          />
          <button
            onClick={changeTitulo}
            className="submit_form"
            type="submit"
          >
            Guardar
          </button>
        </label>
        <h3 className="author_text">Autor: {article.autor}</h3>
        <h3 className="author_text">Fecha: {article.fechaCreacion}</h3>

        <h3 className="editor_subtitle"> ¿Qué quieres editar?</h3>
        <div className="container_editor_text">
          <textarea
            isRequired={true}
            type="textarea"
            defaultValue={contenido}
            onChange={(e) => setContenido(e.target.value)}
            className="editor_textarea"
            useRef="TheContentInput"
          />

          <div className="container_mirror">
            <MarkdownPreview
              rehypePlugins={[rehypeHighlight]}
              source={contenido}
            />
          </div>
        </div>

        <button className="submit_form" type="submit" colorScheme="brand">
          Guardar
        </button>
      </form>
    </React.Fragment>
  );
}
