import React, { useState, useEffect } from 'react';
import Unsplash from 'unsplash-js';

import CardList from './Card-list/card-list'
import Search from './search/search'
import Popup from './Popup/popup'
import Logo from './Logo/logo'
import { accessKey } from './config' 
import './App.css'


const App= () => {

  const [images, setImages]= useState(null)
  const [show, changeShow]= useState(false)

  useEffect(()=>{
    const unsplash = new Unsplash({ accessKey });
    unsplash.search.photos("forest", 1, 9, { orientation: "landscape" })
        .then(data=>data.json())
        .then(data => {
          console.log(data.results)
          setImages(data.results.slice(0,9))
      });
    }, [])

    const clickHandler=() =>{
      changeShow(!show)
    }

    return (
      <div>
        <Popup show={show} clickHandler={clickHandler}/>
        <div>
          <Logo />
          <Search />
          { images && <CardList images={images} clickHandler={clickHandler}/> }
        </div>
      </div>
    );
}


export default App;
