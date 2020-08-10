import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getImages } from '../../api/api'
import { setNewImages } from '../../redux/actions'
import './styles.css'

const Search= ({ setNewImages }) => {

    const [query, setQuery]= useState('')

    const searchImages= async() => {
        const images= await getImages(query, 1)
        setNewImages(images, query)
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
    setNewImages: (images, query) => dispatch(setNewImages(images, query))
})

export default connect(null, mapDispatchToProps)(Search)