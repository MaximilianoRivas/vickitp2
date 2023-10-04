import './characters.css'
import {useState, useEffect, Fragment} from 'react'
import Filter from '../../Components/Filter/Filter';
import Card from '../../Components/Card/card';
import Nav from '../../Components/Nav/navegation';


export default function Character() {
    let [listaCompleta,setListaCompleta]=useState([]);
    let [personajes,setPersonajes]=useState([]);
    let [filtros]=useState([
        {
            nombre:"Alive",
            filtro:'Character Alive'
        },{  
            nombre:"Dead",
            filtro:'Character Dead'
        },{
            nombre:'Female',
            filtro:'Female'
        },{
            nombre:"Male",
            filtro:'Male'
        },{
            nombre:"unknown",
            filtro:'Origin Unknown'
        }]);
    let[filtrosAplicados,setFiltrosAplicados]=useState([]);


    let traerPersonajes=async()=>{
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err =>console.log("Hubo un error: "+ err));

        return dato
    }

   


    let aplicarFiltros=(event)=>{
        let nombreCheckbox=event.target.id;

        if(event.target.checked === true){
            console.log("Aplicar filtro")
            setFiltrosAplicados([...filtrosAplicados,nombreCheckbox]);
            
        }else{
            console.log("sacar filtro")
            let filtrosRestantes=filtrosAplicados.filter((el)=>el !== nombreCheckbox);
            setPersonajes(listaCompleta);
            setFiltrosAplicados(filtrosRestantes)
    
        }    
           
    }

    useEffect(()=>{
        let guardarPersonajes=async()=>{
            let info =await traerPersonajes();
        
            let listaPersonajes=info.results;

            setPersonajes(listaPersonajes)
            setListaCompleta(listaPersonajes)
        }
        
        guardarPersonajes();
        
    },[])

    
    useEffect( ()=>{
        
      filtrosAplicados.forEach((filtroNombre)=>{
            let resultado;
            if(filtroNombre === "Alive" || filtroNombre === "Dead"){
                    resultado=personajes.filter((personaje)=> personaje.status === filtroNombre)
                }
                if(filtroNombre === "Female" || filtroNombre === "Male"){
                    resultado=personajes.filter((personaje)=> personaje.gender === filtroNombre)
                }
                if(filtroNombre === "unknown"){
                    resultado=personajes.filter((personaje)=> personaje.origin.name === filtroNombre)
                    
                }
                setPersonajes(resultado)
        })
       
    },[filtrosAplicados])



    return(
        <Fragment>
            <Nav  itemMenu={"Characters"}/>
            <section>
                <h2 className='filtro'>Filters</h2>
               <form className='d-flex gap-5 p-5 '>
                    {filtros.map((item)=>{ return <Filter key={item.nombre} valorFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>})}
               </form>
            </section>
            
            
            <section className='maxi '>
            
                {personajes.length>0?
                    personajes.map((personaje)=>{
                                return <Card key={personaje.id} data={personaje}/>
                    }):
                    
                    <p className="alert alert">
                <i className="bi bi-exclamation-octagon-fill me-2"></i>
                    Sorry! There are no characters with all those properties.
                </p>
                
                }

            
    
            </section>
        </Fragment>
    )
}
