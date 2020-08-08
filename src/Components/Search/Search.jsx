import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setKeyword } from '../../redux/actions'
import './styles.css'

const Search= ({ setKeyword }) => {

    const [query, setQuery]= useState('')

    const searchImages= () => {
        query && setKeyword(query)
        setQuery('')
    }

    return (
        <div className='search-container'>
            <input value={query} onChange={event=>setQuery(event.target.value)} 
                placeholder='Seacrh for images here...' className='search-input' onKeyDown={e => {
                    if(e.keyCode===13) searchImages()
                }
                }/>
            <span className='icon-container'>
                <i className="fa fa-search search-icon" onClick={searchImages}></i>
            </span>
        </div>
    )
}
 
const mapDispatchToProps=(dispatch) => ({
    setKeyword: (keyword) => dispatch(setKeyword(keyword))
})

export default connect(null, mapDispatchToProps)(Search)