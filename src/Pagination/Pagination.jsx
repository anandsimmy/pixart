import React from 'react'
import './styles.css'

const Pagination=({ images, pageNum, setPageNum }) => {
    return (
        images && images.length>0 && 
        <div className='pagination'>
          <span className='page-button' onClick={pageNum > 1 ? ()=>setPageNum(pageNum-1) : null}>&lang;</span>
          <span className='page-button' onClick={()=>setPageNum(pageNum+1)}>&rang;</span>
        </div>
    )
}

export default Pagination