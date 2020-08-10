import Unsplash from 'unsplash-js'
import { accessKey } from '../config'

const unsplash = new Unsplash({ accessKey });

export const getImages= async (keyword, pageNum) => {
    let data= await unsplash.search.photos(keyword, pageNum, 9, { orientation: "landscape" })
    data= await data.json()
    console.log(data)
    return data.results.length!==0 ? data.results.slice(0,9) : null
}


