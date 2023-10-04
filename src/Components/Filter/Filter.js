import './filter.css'

export default function Filter({valorFiltro,idFiltro,handlerChange}) {
    return(

        

    
    
        <div className="filters-container form-check form-switch d-lg-flex justify-content-lg-center gap-2 py-2 mx-4 rounded-5">
             
            <input className="form-check-input"
            type="checkbox"
            role="switch"
            id={idFiltro} 
            onChange={handlerChange}

            />
            <label className="filters-text form-check-label" 

            htmlFor={idFiltro}>

             {valorFiltro}

            </label>

           
            
        </div> 
        
       
    )
}

