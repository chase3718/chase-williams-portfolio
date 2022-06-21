import React from 'react'
import './Navbar.css'
import ColorModeToggle from './ColorModeToggle'
import MenuButton from './MenuButton'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <ColorModeToggle />
                <MenuButton />
            </ul>
        </nav>
    )
}
