import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import './ColorModeToggle.css'


export default function ColorModeToggle(props) {
  const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  }

  const [theme, setTheme] = useState(storedTheme);

  function toggleColorMode() {
    var currentTheme = document.documentElement.getAttribute('data-theme');
    var targetTheme = (currentTheme === 'light') ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    setTheme(targetTheme);
  }

  return (
    <li className="colorMode">
      <button className="colorModeButton" onClick={toggleColorMode}>
        {theme === 'light' && <FontAwesomeIcon icon={faMoon} />}
        {theme === 'dark' && <FontAwesomeIcon icon={faSun} />}
      </button>
    </li>
  )
}
