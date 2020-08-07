import React from 'react'
import Card from '../Card/card'
import './styles.css'

const CardList= ({ images, clickHandler }) => {
    return (
        <div className='card-list'>
        { images.map(({id, urls}) => (
            <Card key={id} url={urls.regular} clickHandler={clickHandler} />
        ))
        }
        </div>
    )
}

export default CardList

 