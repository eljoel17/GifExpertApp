
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: imagenes, loading} =  useFetchGifs(category);
 //  const [images, setimages] = useState([]);
     
    
  
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loding...</p>}
          <div className="card-grid">
   
                {
                    imagenes.map( img => (
                        <GifGridItem 
                        key = {img.id}
                        {...img}
                        />))
                    }
   
        </div> 
      </>
    )
}
