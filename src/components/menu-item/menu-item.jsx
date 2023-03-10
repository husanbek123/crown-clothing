import React from 'react'
import './menu-item.scss'

export default function Menu_item({title, img, size}) {
  return (
    <div className={`menu-item ${size}`}>
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${img})`
            }} 
        />
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
  )
}
