import React from 'react'
import { withRouter } from 'react-router-dom'
import './styles.css'

const Logo=({ history }) => {
    return (
        <span className='logo-container' onClick={()=>history.push('/home')}>
            <p>Pixart</p>
        </span>
    )
} 

export default withRouter(Logo)