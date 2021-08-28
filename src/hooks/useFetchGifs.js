import { useEffect, useState } from "react"
 import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    //useEffect es para que solo se dispare 1 vez
    useEffect( () =>{
        getGifs(category)
            .then(imgs =>{
 
                    setState({
                         data: imgs,
                         loading: false
                     });
            }) 
        
            
        },[category]) 
    return state;



}