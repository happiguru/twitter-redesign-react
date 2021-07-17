import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const MenuItem = (props) => {
    return (
        <Nav.Item as="li">
            <Nav.Link href={props.menuLink}>{props.menuMessage}</Nav.Link>
        </Nav.Item>
    )
}

MenuItem.propTypes = {
    menuLink: PropTypes.string,
    menuMessage: PropTypes.string
}

export default MenuItem;