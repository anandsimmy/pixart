import React from 'react'
import './styles.css'

const Card= ({name, url, clickHandler}) => {
    return (
    <div className='card-container' onClick={clickHandler}>
        <img className='card-image' alt='unsplash' src={url} />
        <h2>{name}</h2>
    </div>
    )
}

export default Card