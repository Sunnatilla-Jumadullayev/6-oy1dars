import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/header/header";
import Nav from "./component/header/nav/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
    </>
  );
}

export default App;
