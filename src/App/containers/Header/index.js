import React from 'react'
import './index.css'
import Logo from '../../../img/nyancat.webp'

const header = () => {
    return (
        <header>
            <img src={Logo} />
            <p>Welcome to Chateau Chason !</p>
        </header>
    )
}

export default header