import React, { useState } from 'react';
import '../Styles/Fakeapi.css'

function Fakeapi() {
    const url = 'https://633c8a69f2b0e623dc642b74.mockapi.io/api/v1/hola/'
    const [postId,setPostId] = useState(0);
    const [name,setName] = useState('');
    const [deletedName,setDeletedName] = useState('');
    const [id, setId] = useState();
    const [getName, setGetName] = useState('');
    const [getCity, setGetCity] = useState('');
    const [getState, setGetState] = useState('');
    const [nombre , setNombre ] = useState ('');
    const [ciudad , setCiudad ] = useState ('');
    const [pais , setPais ] = useState ('');

    const Get = async(number) => {
        const response = await fetch(url+number)
        const data = await response.json()
        setId(data.number)
        setId(data.id)
        setGetName(data.name)
        setGetCity(data.city)
        setGetState(data.state)
      }
    

    const handleChange = event => {
      setId(event.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    }
    const cargar = {
      "name" : nombre,
      "city" : ciudad,
      "state" : pais
    }

    const Post = async() => {
      const request = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(cargar)
      }
      const response = await fetch(url,request)
      const data = await response.json()
      setPostId(data.id)
      setName(data.name)
    }

    const Delete = async(number) => {
        const request = await fetch(url+number,{
          method:'DELETE'
        })
        const data = await request.json()
        setDeletedName(data.id)
      }
    

  return (
      <header className="App-header headerFake ">

        {/* BUSCADOR Y ELIMINADOR DE ID */}
        <div className='buscadorId'>
        <div className='get'>
          <input type="number" id="id" class="input-group-text input aa" onChange={handleChange} value={id}></input>
          <button class="btn btn-light aa" onClick={() => Get(id)}>Obtener</button>
          <button class="btn btn-light aa" onClick={() => Delete(id)}>Borrar</button>
          {deletedName}
        </div>
        <div className="containerFake">
          <div className='card border-light mb-3'>
                        <p className='card-header'><strong>Usuario #{id}</strong></p>
                        <div className='card-body'>
                        <p className='card-title'><strong>Nombre:</strong> {getName}</p>
                        <div className='card-text'>
                            <span>Perteneciente de {getCity}, {getState}</span>
                        </div>
        </div>
        </div>
        </div>
        </div>

        {/* CARGADOR DE DATOS */}
       <div className='contenedorForm'>
        <form className='formPost' onSubmit={handleSubmit}>
          <div className='containerPost'>
            <strong>Nombre:</strong>
            <input class="input-group-text input" placeholder='Ingresar nombre' required type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          </div>
          <div className='containerPost'>
            <strong>Ciudad:</strong>
            <input class="input-group-text input" placeholder='Ingresar ciudad' required type="text" name="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
          </div>
          <div className='containerPost'>
            <strong>Pais:</strong> 
            <input class="input-group-text input" placeholder='Ingresar pais' required type="text" name="pais" value={pais} onChange={(e) => setPais(e.target.value)}/>
          </div>
          <button class="btn btn-light post" onClick={() => Post()}>Agregar</button>
        </form>
        </div>
        
      </header>
  );
  }

export default Fakeapi;
