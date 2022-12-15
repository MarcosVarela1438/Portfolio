import "./Styles/App.css";
import logo from './logo.svg'
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FakeApi from "./Components/FakeApi";
import Coins from "./Components/Coins"
import Error from "./Components/Error"
import Principal from "./Components/Principal"
import List from "./Components/List"
import Saludar from "./Components/Saludo";
import { BsMoonStars } from 'react-icons/bs';
import { IoMdSunny } from 'react-icons/io';
import { hover } from "@testing-library/user-event/dist/hover";
import HookForm from "./Components/Contact";
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import Footer from "./Components/Footer";



function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className=" text-center contenedorGrid" style={darkMode ? {backgroundColor: "#282c34", color: "#ffffff", border: "#ffffff"} : {backgroundColor: "#ffffff", color: "#000000", border: "#000000"}}>
      <Router>
      <div className="row">
        <div className="colNav contenedorNav">
          <div className="contenedorNavTitulo">
            <img src={logo} className="App-logo" alt="logo" style={{width: "100px"}}/>
          <h3>Marcos Varela</h3>
          <div className="contenedorBtn">
          <input className="inputDarkMode" type="checkbox" id="darkmode-toggle" onClick={() => {setDarkMode(!darkMode)}}/>
        <label className="labelDarkMode" for="darkmode-toggle">
          <IoMdSunny className='sun'/>
          <BsMoonStars className='moon'/>
        </label>
          </div>
          </div>
          <ul className="list-group" >
          <li class="list-group-item list-group-item-action" >
              <Link className="navLink" to={"/"}>Home</Link>
            </li>
            <li class="list-group-item list-group-item-action" >
              <Link className="navLink" to={"./componentes/Coins"}>Cryptomonedas</Link>
            </li>
            <li class="list-group-item list-group-item-action">
              <Link className="navLink" to={"./componentes/FakeApi"}>Cargador de usuarios</Link>
            </li>
            <li class="list-group-item list-group-item-action">
              <Link className="navLink" to={"./componentes/List"}>Lista de usuarios</Link>
            </li>
          </ul>
        <Saludar/>
        </div>
        <div className="col col-8 contenedorMain">
          <Routes>
            <Route path="/componentes/Coins" element={<Coins/>}/>
            <Route path="/componentes/FakeApi" element={<FakeApi/>}/>
            <Route path="/componentes/List" element={<List/>}/>
            <Route path="/*" element={<Error/>}/>
            <Route path="/" element={<Principal/>}/>
          </Routes>
         
          <Footer/>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
