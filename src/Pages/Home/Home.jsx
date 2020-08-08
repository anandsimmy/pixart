import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import CardList from '../../Components/Card-list/Card-list'
import Search from '../../Components/Search/Search'
import Loadmore from '../../Components/Loadmore/Loadmore'
import { setNewImages, loadMoreImages } from '../../redux/actions'
import { getImages } from '../../api/api'
import './styles.css'

const Home= ({ images, keyword, pageNum, setNewImages, loadMoreImages }) => {

  useEffect(()=>{
    getImages(keyword, 1, setNewImages)
    }, [keyword])
  
  // useEffect(()=>{
  //   getImages(keyword, pageNum, loadMoreImages)
  //   }, [pageNum])

    return (
      <div>
        <div className='main-container'>
          <Search />
          <CardList images={images} />
          <Loadmore images={images} />
        </div>
      </div>
    );
}

const mapStateToProps=({ images, keyword, pageNum }) => ({
    images,
    keyword,
    pageNum
})

const mapDispatchToProps=(dispacth) => ({
  setNewImages: (images) => dispacth(setNewImages(images)),
  loadMoreImages: (images) => dispacth(loadMoreImages(images))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
