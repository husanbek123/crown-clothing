import React from 'react'
import Menu_item from '../menu-item/menu-item.jsx'
import './items-menu.scss'

class Items_menu extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
            }]
        }
    }

    render() {
        return (
            <div className="items-menu">
                {
                    this.state.sections.map(({title, id, imageUrl, size}) => (
                        
                        <Menu_item key={id} title={title.toUpperCase()} img={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Items_menu
