import "./App.css";
import Headers from "./components/Headers/Headers";
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import PageGaragem from "./pages/Garagem/PageGaragem";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/garagem" element={<PageGaragem />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
