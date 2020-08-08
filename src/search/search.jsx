import React, { useState } from 'react'
import './styles.css'

const Search= ({ setKeyword, setPageNum }) => {

    const [query, setQuery]= useState('')

    const searchImages= () => {
        query && setKeyword(query)
        setPageNum(1)
        setQuery('')
    }

    return (
        <div className='search-container'>
            <input value={query} onChange={event=>setQuery(event.target.value)} 
                placeholder='Type someting...' className='search-input' onKeyDown={e => {
                    if(e.keyCode===13) searchImages()
                }
                }/>
            <i className="fa fa-search search-icon" onClick={searchImages}></i>
        </div>
    )
}
 
export default Search