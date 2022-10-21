import React from 'react'
import Button from './Button'


const Header = ({ onAdding, showAdd }) => {
    return (
        <header className='header'>
            <h1>HABIT TRACKER</h1>
            <Button color={showAdd ? 'red' : 'green ' } text={showAdd ? 'Close' : 'Add'} onClick={onAdding} />
        </header>
    )
} 


export default Header