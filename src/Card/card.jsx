import React from 'react'
import './styles.css'

const Card= ({name, id, urls, user, clickHandler}) => {
    return (
    //can pass full image using urls.full
    <div className='card-container' onClick={()=>clickHandler({url: urls.regular, user, id})}>
        <img className='card-image' alt='unsplash' src={urls.regular} />
        <h2>{name}</h2>
    </div>
    )
}

export default Card