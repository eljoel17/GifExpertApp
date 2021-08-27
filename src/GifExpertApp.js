
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () =>{
     
    const [categorias, setcategorias] = useState(['Dragon ball']);

    /* const handleAdd = () =>{
        const valor = 'Michael Jackson';
        //de esta manera agregamos el valor al arreglo.
       // setcategorias([...categorias, valor]);
        //otra manera
        setcategorias(categori =>[...categori,valor]);
    } */
    return(
        <>  
        <h1> GifExpertApp</h1>
        {/* Asi podemos llamar a componentes dentro de otros componentes */}
        <AddCategory setcategories={setcategorias}/>  
        <hr></hr>
   
        
        <ol>
            {
                categorias.map(categoria=>(
                    <GifGrid 
                    key = {categoria}
                    category ={categoria}/ > 
                ))
            }
        </ol>

        </>
    );

}
export default  GifExpertApp;