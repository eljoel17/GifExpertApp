  ///hacemos peticion http
  export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=25&api_key=dKCLxGlH18mHOazHBUlrXRQZX1Y4z2b3`;
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
return gifs;
}