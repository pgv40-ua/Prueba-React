import logo from "./logo.svg";
import "./App.css";
import { MyRoutes } from "./routers/routes";
import React from 'react'
function App() {
  return (
    <div>
      <header>
        <h1 className="titulo">😎Películas</h1>
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;
