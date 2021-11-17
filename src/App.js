import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { keepTheme } from "./components/toggle/themes";
import TextEditor from "./pages/TextEditor";
import "./styles/App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ReadArticle from "./pages/ReadArticle";
import EditArticle from "./pages/EditArticle";
function App() {
  useEffect(() => {
    keepTheme();
  });
  return (
    <BrowserRouter>
      <div className="App">
        {" "}
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/editorapp" element={<TextEditor />} />
          <Route path="/" element={<Login />} />
          <Route path="/edit/articulo/:id_articulo" element={<EditArticle />} />
          <Route path="/leer/articulo/:id_articulo" element={<ReadArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
