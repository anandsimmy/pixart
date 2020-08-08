import React, { useState, useEffect } from 'react'

import CardList from '../Card-list/Card-list'
import Search from '../Search/Search'
import Popup from '../Popup/Popup'
import Logo from '../Logo/Logo'
import Pagination from '../Pagination/Pagination'
import { getImages } from '../api/api'
import './styles.css'

const Home= () => {

  const [images, setImages]= useState([])
  const [pageNum, setPageNum]= useState(1)
  const [keyword, setKeyword]= useState()
  const [modalImage, setModalImage]= useState({})
  const [showModal, changeShowModal]= useState(false)

  useEffect(()=>{
    getImages(keyword, pageNum, setImages)
    }, [keyword, pageNum])

    const clickHandler=(info) =>{
      changeShowModal(!showModal)
      info && setModalImage(info)
    }

    return (
      <div>
        <Popup show={showModal} modalImage={modalImage} clickHandler={clickHandler}/>
        <div className='main-container'>
          <Logo />
          <Search setKeyword={setKeyword}/>
          <CardList images={images} clickHandler={clickHandler}/>
          <Pagination images={images} pageNum={pageNum} setPageNum={setPageNum}/>
        </div>
      </div>
    );
}

export default Home;
