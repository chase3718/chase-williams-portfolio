import React from 'react';
import './styles.css';
import { ContentDivider } from '../components.js';

export default function hep() {
    return (
        <div className="banner"> 
            <div className="title">
                <h3>Chase Williams</h3>
                <div className="spacer"></div>
                <div className="logo"></div>
            </div>
            <ContentDivider className="horizontal"/>
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
