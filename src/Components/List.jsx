import React, {useState , useEffect} from 'react';
import '../Styles/List.css'

function List() {
    const url =  'https://633c8a69f2b0e623dc642b74.mockapi.io/api/v1/hola/';
    const [list, setList] = useState();
    const fetchApi = async() => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setList(responseJSON);
    }

    useEffect(() => {
        fetchApi()
    }, [])
    return (        
        <div className='containerList'>
        <h1 className='tittle'><strong>Lista de usuarios</strong></h1>
            <ol className='containerPj'>
                {!list ? '' :
                list.map((data,index) => {
                    return <div className='card border-light mb-3'key={data.id}>
                        <p className='card-header'><strong>Usuario #{data.id}</strong></p>
                        <div className='card-body'>
                        <p className='card-title'><strong>Nombre:</strong> {data.name}</p>
                        <div className='card-text'>
                            <span>Perteneciente de {data.city}, {data.state}</span>
                        {/* <p><strong>City:</strong> {data.city}</p>
                        <p><strong>State:</strong> {data.state}</p> */}
                        </div>
                        </div>
                    </div>

                })}
            </ol>          
        </div>
    )
}
export default List;
