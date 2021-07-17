import React from 'react';
import { Container } from 'react-bootstrap';
import LeftMenuCont from './LeftMenuCont';

const Header = () => {
    return (
        <React.Fragment>
            <Container>
                 <LeftMenuCont />
                 <LeftMenuCont />
            </Container>
            
        </React.Fragment>
    )
}

export default Header;