import React, { useEffect, useState } from 'react';
import './styles.css';
import { ContentDivider } from '../components.js';
import { useNavigate } from 'react-router-dom';

export default function Index() {

    const [sticky, setSticky] = useState("");

    // Using useNavigate to navigate to the next page instead of Link for better styling
    const nav = useNavigate();
    const handleNavigate = (to) => {
        nav(to);
    };

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
        let stickyClass = "";
        // const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
        if (sticky !== "is-sticky" && scrollTop >= 250) {
            stickyClass = "is-sticky";
        } else if (sticky === "is-sticky" && scrollTop > 0) {
            stickyClass = "is-sticky";
        }
        setSticky(stickyClass);
    };

    let classes = "banner " + sticky;

    return (
        <div className={classes}>
            <button onClick={() => handleNavigate('/')} className="button-title">
                <h3>Chase Williams</h3>
                <div className="spacer"></div>
                <div className="logo"></div>
            </button>
            <ContentDivider className="horizontal" />
            <div className="button-container">
                <button onClick={() => handleNavigate('/resume')} className="button resume">
                    <h3>Resume</h3>
                </button>
                <button onClick={() => handleNavigate('/portfolio')} className="button resume">
                    <h3>Portfolio</h3>
                </button>
                <button onClick={() => handleNavigate('/contact')} className="button resume">
                    <h3>Contact</h3>
                </button>
            </div>
        </div>
    )
}
