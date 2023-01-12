import React from 'react'
import './menu-item.scss'


export default function Menu_item(props) {
  return (
    <div className="menu-item">
        <div className="content">
            <h1 className="title">{props.title}</h1>
            <span className="subtitle">SHOP</span>
        </div>
    </div>
  )
}
