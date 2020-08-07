import React from 'react'
import './styles.css'

const Search= () => {
    return (
        <div className='search-container'>
            <input placeholder='Type someting...' className='search-input'/>
            <i className="fa fa-search search-icon"></i>
        </div>
    )
}

export default Search