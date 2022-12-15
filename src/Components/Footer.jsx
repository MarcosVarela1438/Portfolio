import React from "react";
import HookForm from "./Contact";
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import "../Styles/App.css";

const Footer = () => {

    return(
          <div className="col col-12 contenedorFooter">
            <div className="footerInfo col-3">
              <h2>Portfolio Marcos</h2>
              <h3 className="subtitulo">Bootcamp Hedy</h3>
              <p className="copy">©Marcos Varela, 2022 - Todos los derechos reservados.</p>
            </div>
            <div className="footerContact col-5">
              <HookForm/>
            </div>
            <div className="footerLi col-2">
              <a className="footerA" href="https://www.linkedin.com/in/marcos-varela-98b077235/" target="_blank" onclick="window.open(this.href, thies.target, 'width=300, height=400')"><AiFillLinkedin/></a>
              <a className="footerA" href="https://github.com/MarcosVarela1438" target="_blank" onclick="window.open(this.href, thies.target, 'width=300, height=400')"><AiFillGithub/></a>
            </div>
          </div> 
    )
}

export default Footer;