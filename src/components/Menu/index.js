import React from "react";
import logo from "../../assets/img/courseflix.png";
//import ButtonLink from "./components/ButtonLink";

import Button from "../Button";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="AluraFlix logo" />
      </a>

      {/* <ButtonLink className="ButtonLink" href="/">
        Novo Vídeo
      </ButtonLink> */}

      <Button as="a" className="ButtonLink" href="/">
        Novo
      </Button>
    </nav>
  );
}

export default Menu;
