import React from 'react'
import './styles.css'

const Pagination=({ images }) => {
    return (
        images && images.length>0 && 
        <div className='pagination'>
          <span>&laquo;</span>
          <span className='active'>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&raquo;</span>
        </div> 
    )
}

export default Pagination

