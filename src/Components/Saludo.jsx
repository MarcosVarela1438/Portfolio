import React from "react";
import { useEffect, useState } from "react";

function Saludar(props) {
    const usuario = props.usuario;
    const mensajeUsuario = ['Buenos días ', 'Buenas tardes ', 'Buenas noches '];
    const [hora, setHora] = useState(new Date());
    const horaActual = hora.getHours();

    function actualizarHora() {
        setHora(new Date());
    }

    useEffect(() => {
        const temporizador = setInterval(actualizarHora, 1000)

        return function intervalo() {
            clearInterval(temporizador);
        }
    })


return(
    <div className="conteinerSaludo">
        {horaActual < 13 &&
            <h2>{mensajeUsuario[0]}{usuario}</h2>
        }
        {(horaActual > 12 && horaActual < 20) &&
            <h2>{mensajeUsuario[1]}{usuario}</h2>
        }
        {horaActual > 19 &&
            <h2>{mensajeUsuario[2]}{usuario}</h2>
        }
        <h2 style={{fontSize:20}}>
        Hora: <span>{hora.toLocaleTimeString()}</span> 
        </h2>
    </div>
) 
}

export default Saludar;
