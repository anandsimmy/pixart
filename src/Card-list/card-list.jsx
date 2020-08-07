import React, { memo } from 'react'
import Card from '../Card/Card'
import './styles.css'

const CardList= ({ images, clickHandler }) => {
    return (
        images ? images.length > 0 ? 
            <div className='card-list'>
                { images.map(({id, urls, user}) => (
                    <Card key={id} id={id} urls={urls} user={user} clickHandler={clickHandler} />
                ))
                }
            </div> : null : 
        <h2 className='error-message'>Sorry, no images found!</h2>
    )
}

export default memo(CardList)

 
