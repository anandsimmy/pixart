import React from 'react'

import './styles.css'

const Popup=({ show, clickHandler, modalImage: { url, user, id } }) => {

    const downloadLink= `https://unsplash.com/photos/${id}/download?force=true`

    return show ? 
        (<>
            <div className='backdrop' onClick={clickHandler}></div>
            <div className='modal'>
            <h1 className='modal-title'>{`${user.last_name}, ${user.first_name}`}</h1>
                <i className="fa fa-close close-icon" onClick={clickHandler}></i>
                <div className='modal-image-container'>
                    <img alt='unsplash' src={url} className='modal-image'/>
                    <a className='download-link' href={downloadLink}>
                        <button className='modal-button'>Download</button>
                    </a>
                </div>
            </div>
        </>)
        : null
}

export default Popup