import React from 'react'
import './Navbar.css'
import ColorModeToggle from './ColorModeToggle'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <ColorModeToggle />
            </ul>
        </nav>
    )
}
