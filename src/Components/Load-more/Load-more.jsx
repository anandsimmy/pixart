import React from 'react'
import { connect } from 'react-redux'

import { getImages } from '../../api/api'
import { loadMoreImages } from '../../redux/actions'
import './styles.css'

const Loadmore=({ images, keyword, pageNum, loadMoreImages }) => {

    const loadMore= async()=>{
      console.log(keyword, pageNum)
      const nextPage= await getImages(keyword, pageNum+1)
      console.log('nextpage', nextPage)
      loadMoreImages(nextPage)
    }

    return (
        images && images.length>0 && 
        <div className='pagination'>
          <span className='page-button' onClick={loadMore}>load more</span>
        </div>
    )
}

const mapStateToProps=({ images, keyword, pageNum }) => ({
  images,
  keyword,
  pageNum
})

const mapDispatchToProps=(dispatch) => ({
  loadMoreImages: (images) => dispatch(loadMoreImages(images))
})

export default connect(mapStateToProps, mapDispatchToProps)(Loadmore)