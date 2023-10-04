import './infocard.css'

export default function InfoCard({status,especie,origen,genero,setShow}) {
    return(
        <div  className="column-info">
              
             
             <button onClick={()=>setShow(false)} className=" m-2 btn-x-md">X

            
             </button>
                
            
            <ul className="info-card">
                <li className="list-group-item">

                    <p>Character Status Alive</p>
                   
                </li>
                <li className="list-group-item">
                <p>Specie:</p>
                <p className='fs-5'>{especie}</p></li>
                <li className="list-group-item">
                <p>Origin:</p>
                <p className='fs-5'>{origen}</p></li>
                <li className="list-group-item">
                <p>Gender</p>
                <p className='fs-5'>{genero}</p></li>
            </ul>
        </div>
    )
}

