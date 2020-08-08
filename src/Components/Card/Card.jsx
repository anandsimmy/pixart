import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setDownloadImageInfo } from '../../redux/actions'
import './styles.css'

const Card= ({urls, user, history, setDownloadImageInfo, ...props}) => {

    const clickHandler=async (info) => {
        await setDownloadImageInfo(info)
        history.push('/download')
    }

    return (
        //can pass full image using urls.full
        <div className='card-container' onClick={()=>clickHandler({urls, user, ...props})}>
            <img className='card-image' alt='unsplash' src={urls.regular} />
            <span className='user-details'>
                <img className='user-image' alt='user' src={user.profile_image.small} />
                Image by <span className='user-name'>{user.first_name} {user.last_name}</span>
            </span>
        </div>
    )
}

const mapDispatchToProps=(dispatch) => ({
    setDownloadImageInfo:(info) => dispatch(setDownloadImageInfo(info))
})

export default withRouter(connect(null, mapDispatchToProps)(Card))