import React from 'react'
import './styles.css'

const Popup=({ show, clickHandler }) => {
    return show ? 
        (<>
            <div class='backdrop' onClick={clickHandler}></div>
            <div class="modal">
                <h1 class="modal__title">Name</h1>
                <div class="modal__image">
                    
                </div>
            </div>
        </>)
        : null
}

export default Popup