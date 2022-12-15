import React from "react";
import '../Styles/Principal.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Principal = () => {
    return ( 
    <Carousel className="carousel">
         <div >
                    <img className="imgMentoria1" src=""/>
                    <a href="https://mentoria-1.web.app/" target="_blank" onclick="window.open(this.href, thies.target, 'width=300, height=400')"><button className="legend">Mentoria 1</button></a>
                </div>
                <div>
                    <img className="imgMentoria2" src="" />
                    <a href="https://mentoria-2.web.app/" target="_blank" onclick="window.open(this.href, thies.target, 'width=300, height=400')"><button className="legend">Mentoria 2</button></a>
                </div>
                <div>
                    <img className="imgMentoria3" src="" />
                    <a href="https://coinbase-79c4c.web.app/signin" target="_blank" onclick="window.open(this.href, thies.target, 'width=300, height=400')"><button className="legend">Mentoria 3</button></a>
                </div>
    </Carousel>
    );
};

export default Principal;