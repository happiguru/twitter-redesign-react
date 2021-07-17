import React from 'react';
import MenuItem from './MenuItem';
import { Nav } from 'react-bootstrap';

const menuItemList = [
    {
        menuLink: '#home',
        menuMessage: 'Home'
    },
    {
        menuLink: '#notifications',
        menuMessage: 'Notifications'
    },
    {
        menuLink: '#messages',
        menuMessage: 'Messages'
    }
]

const LeftMenuCont = () => {
    return (
        <React.Fragment>
            <Nav className="justify-content-left">
                { menuItemList.map((menu, index) => 
                    <MenuItem 
                    menuLink={menu.menuLink}
                    menuMessage={menu.menuMessage}
                    key={index}
                    />
                )}
            </Nav>
        </React.Fragment>
    )
}

export default LeftMenuCont;