    
import './card.css';
import InfoCard  from '../InfoCard/Infocard';
import { useState } from 'react';

export default function Card({data}) {
    const [show,setShow]= useState(false);
    
    
    const mostrarLista=()=>{
        setShow(true);
        
    }

    return(
        <div className="card bg-blue border mb-2 p-2  flex-row gap-5">
            <div className='fondo'>
                <img src={data.image} alt="imagen-personaje..."/>
                <h3 className='nombres'>{data.name}</h3>
                <button className={show?"d-none":"d-block"} onClick={mostrarLista}>Know More..</button>
            </div>
{show === true? <InfoCard status={data.status} genero={data.gender} especie={data.species} origen={data.origin.name} setShow={setShow}/>:''}
        </div>
    )
}