import React from 'react';
import './styles.css'

export default function index( { className } ) {
  return (
    <div className={className}>
      <div className="color-blur" />
      <div className="solid-line" />
    </div>
  )
}
