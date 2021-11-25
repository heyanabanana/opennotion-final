import React from "react";

import { useState } from "react";
import API from "../utils/API";
import { TextoPrueba } from "../utils/dataPrueba";
import MarkdownPreview from "@uiw/react-markdown-preview";

import "../utils/codehightlight.css";
import "../styles/textEditor.css";
import rehypeHighlight from "rehype-highlight";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

export default function EditorApp() {
  const [titulo, setTitulo] = useState();
  const [autor, setAutor] = useState();
  const [categoria, setCategoria] = useState();
  const [contenido, setContenido] = useState(TextoPrueba);

  const handleSubmit = async (event) => {
    event.preventDefault();

    API.post(`articulos/crear`, { titulo, autor, contenido }).then((res) => {
      console.log(res);
      console.log(res.data);
    }, axiosConfig);
    API.post(`categorias/crear`, { categoria }).then((res) => {
      console.log(res);
      console.log(res.data);
    }, axiosConfig);

    // Meter un navigate aquí a la página principal o al artículo creado:
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="markdown-editor-post">
        <input
          placeholder="Tu fabuloso título aquí! ⚡️"
          isRequired={true}
          type="text"
          className="editor_title"
          name="titulo"
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
        />
        <h3 className="author_text">¿Quién eres?</h3>
        <input
          isRequired={true}
          placeholder="Tu nombre aqui"
          className="editor_input_text"
          name="autor"
          onChange={(e) => {
            setAutor(e.target.value);
          }}
        />

        <h3 className="editor_subtitle">¿Sobre qué hablaremos hoy?</h3>
        <input
          isRequired={true}
          placeholder="Categoria aqui"
          className="editor_input_text"
          name="autor"
          onChange={(e) => {
            setCategoria(e.target.value);
          }}
        />

        <h3 className="editor_subtitle"> Escríbelo todo!</h3>
        <div className="container_editor_text">
          <textarea
            className="editor_textarea"
            name="contenido"
            placeholder={TextoPrueba}
            isRequired={true}
            type="textarea"
            onChange={(e) => {
              setContenido(e.target.value);
            }}
          />

          <div className="container_mirror">
            <MarkdownPreview
              rehypePlugins={[rehypeHighlight]}
              source={contenido}
            />
          </div>
        </div>

        <button className="submit_form" type="submit">
          Enviar
        </button>
      </form>
    </React.Fragment>
  );
}
