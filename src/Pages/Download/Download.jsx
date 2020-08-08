import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

const Download=({ history, imageInfo: { id, urls, user } }) => {

    const downloadLink= `https://unsplash.com/photos/${id}/download?force=true`

    const clickHandler=() => {
        history.push('/')
    }

    return  (
            user ? <>
            <div className='backdrop'></div>
            <div className='modal'>
            <span className='download-user-details'>
                <img alt='user' className='download-user-image' src={user.profile_image.small}></img>
                <span className='download-user-name'>{user.name}</span>
                <span className='download-user-username'>@{user.username}</span>
            </span>
                <span className='close-icon-container' onClick={clickHandler}>
                    <i className="close-icon" >X</i>
                </span>
                <div className='modal-image-container'>
                    <img alt='unsplash' src={urls.regular} className='modal-image'/>
                    <a className='download-link' href={downloadLink}>
                        <button className='modal-button'>Download</button>
                    </a>
                </div>
            </div>
        </> : null)
}

const mapStateToProps=(state) => ({
    imageInfo: state.downloadImageInfo
})

export default connect(mapStateToProps)(Download)