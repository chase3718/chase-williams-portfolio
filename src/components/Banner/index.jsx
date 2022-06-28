import React, { useEffect, useState } from 'react';
import './styles.css';
import { ContentDivider } from '../components.js';

export default function Index() {

    const [sticky, setSticky] = useState("");

    // Set the sticky state to true when the window is scrolled past the banner
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        // Method that will fix header after a specific scrollable
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    let classes = "banner " + sticky;

    return (
        <div className={classes}>
            <div className="title">
                <h3>Chase Williams</h3>
                <div className="spacer"></div>
                <div className="logo"></div>
            </div>
            <ContentDivider className="horizontal" />
            <div className="button-container">
                <button className="button resume">
                    <h3>Resume</h3>
                </button>
                <button className="button resume">
                    <h3>Portfolio</h3>
                </button>
                <button className="button resume">
                    <h3>Contact</h3>
                </button>
            </div>
        </div>
    )
}
