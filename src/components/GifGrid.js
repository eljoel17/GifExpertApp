
import React from 'react'

export const GifGrid = ({category}) => {

    ///hacemos peticion http
    const getGifs = async() =>{

        const url = 'http://api.giphy.com/v1/gifs/search?q=dragon+ball&limit=10&api_key=dKCLxGlH18mHOazHBUlrXRQZX1Y4z2b3';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img =>{
            //de esa manera traemos los datos que solamente queremos
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url

            }
        })
        console.log(data);

    }
getGifs();
    return (
        <div>
            <h3>
                {category}
            </h3>
            
        </div>
    )
}
