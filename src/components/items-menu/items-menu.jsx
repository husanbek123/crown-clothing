import React from 'react'
import Menu_item from '../menu-item/menu-item.jsx'
import './items-menu.scss'

class Items_menu extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="items-menu">
                <Menu_item title="HATS" />
                <Menu_item title="JACKETS" />
                <Menu_item title="SNEAKERS" />
                <Menu_item title="WOMEN" />
                <Menu_item title="MEN" />
            </div>
        )
    }
}

export default Items_menu
