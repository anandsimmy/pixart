import Unsplash from 'unsplash-js'
import { accessKey } from '../config'

const unsplash = new Unsplash({ accessKey });

export const getImages= (query, setImages) => {
    unsplash.search.photos(query, 1, 9, { orientation: "landscape" })
        .then(data=>data.json())
        .then(data => {
            console.log(data.results)
            data.results.length!==0 ? setImages(data.results.slice(0,9)) : setImages(null)
      });
}

export const downloadImage=(id) =>{
    console.log('id', id)
    unsplash.photos.getPhoto(id)
        .then(data=>data.json())
        .then(data => {
        console.log(data)
        unsplash.photos.downloadPhoto(data);
    });
    fetch(`https://api.unsplash.com/photos/${id}/download?client_id=${accessKey}`)
        .then(data=>data.json())
        .then(data=> {
            console.log(data)
        })
}

