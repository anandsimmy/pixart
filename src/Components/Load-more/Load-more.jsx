import React from 'react'
import { connect } from 'react-redux'
import { loadMore } from '../../redux/actions'
import './styles.css'

const Loadmore=({ images, loadMore }) => {
    return (
        images && images.length>0 && 
        <div className='pagination'>
          <span className='page-button' onClick={() => loadMore()}>load more</span>
        </div>
    )
}

const mapStateToProps=({ images, pageNum }) => ({
  images,
  pageNum
})

const mapDispatchToProps=(dispatch) => ({
  loadMore: () => dispatch(loadMore())
})

export default connect(mapStateToProps, mapDispatchToProps)(Loadmore)