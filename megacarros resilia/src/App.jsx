import "./App.css";
import Headers from "./components/Headers/Headers";
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import PageGaragem from "./pages/Garagem/PageGaragem";
import PageAdicionar from "./pages/Adicionar/PageAdicionar.jsx"
import PageAtualizar from "./pages/Atualizar/PageAtualizar.jsx"
import PageDelete from "./pages/Delete/PageDelete.jsx"
import PageHome from "./pages/Home/PageHome.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/garagem" element={<PageGaragem />}/>
          <Route path="/adicionar" element={<PageAdicionar />}/>
          <Route path="/atualizar" element={<PageAtualizar />}/>
          <Route path="/deletar" element={<PageDelete />}/>
          <Route path="/" element={<PageHome />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
