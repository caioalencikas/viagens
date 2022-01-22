import React from 'react'

export default function Header() {
    return (
        <nav className='navbar'>
            <img 
                src={require('../images/world1.png')}
                className='navbar--img'
            />
            <h1 className='navbar--title'>Viagens de Caio e Domi</h1>
        </nav>
    )
}