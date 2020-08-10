import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import CardList from '../../Components/Card-list/Card-list'
import Search from '../../Components/Search/Search'
import Loadmore from '../../Components/Load-more/Load-more'
import { setNewImages } from '../../redux/actions'
import { getImages } from '../../api/api'
import './styles.css'

const Home= ({ images, keyword, pageNum, setNewImages }) => {

    const loadButtonRef= useRef(null)

    useEffect(()=>{
    async function fetchData(){
      const fetchedImages= await getImages(keyword, pageNum)
      setNewImages(fetchedImages, keyword)
    }
    images.length===0 && fetchData()
    }, [])

    useEffect(() =>{
      loadButtonRef.current.scrollIntoView({ behaviour:'instant', block:'end' })
    }, [images])

    return (
      <div>
        <div className='main-container' >
          <Search />
          <CardList images={images} />
          <div ref={loadButtonRef}>
            <Loadmore images={images} />
          </div>
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
  setNewImages: (images, keyword) => dispacth(setNewImages(images, keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
