import Unsplash from 'unsplash-js'
import { accessKey } from '../config'

const unsplash = new Unsplash({ accessKey });

export const getImages= (query, pageNum, setImages) => {
    unsplash.search.photos(query, pageNum, 9, { orientation: "landscape" })
        .then(data=>data.json())
        .then(data => {
            console.log(data)
            data.results.length!==0 ? setImages(data.results.slice(0,9)) : setImages(null)
      });
}


