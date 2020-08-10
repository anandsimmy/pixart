import React, { memo } from 'react'
import Card from '../Card/Card'
import './styles.css'

const CardList= ({ images, clickHandler }) => {
    return (
        images ? 
            <div className='card-list'>
                { images.map(({id, ...props}) => (
                    <Card key={id} id={id} {...props} clickHandler={clickHandler} />
                ))
                }
            </div>  : 
        <h2 className='error-message'>Sorry, no images found!</h2>
    )
}

export default memo(CardList)

 
