import React from "react";
import { useParams, Link } from "react-router-dom";
import '../Styles/Error.css'

const Error = () => {
    const {id} = useParams();
    return (
        <div className="error">
            <Link to={'/'}><a href="./Principal" class="btn btn-primary errorBoton">Return</a></Link>
        </div>
    )
}

export default Error;