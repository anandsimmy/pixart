import React from 'react'
import { withRouter } from 'react-router-dom'
import './styles.css'

const Logo=({ history }) => {
    return (
        <a className='logo-container' href='https://pixart-8e90e.web.app/home'>
            <p>Pixart</p>
        </a>
    )
} 

export default withRouter(Logo)