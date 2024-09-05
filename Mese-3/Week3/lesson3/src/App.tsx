import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpaceFetchComp from "./components/SpaceFetchComp";
import ArticleDetail from "./components/ArticleDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Routes>
            <Route path="/" element={<SpaceFetchComp/>}/>
            <Route path="/article/:id" element={<ArticleDetail/>}/>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
