import React, { useContext } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import ModeContext from '../ModeContext';

const Header = props =>{
    const [mode, setMode] = useContext(ModeContext);

    const switchMode = () => {
        setMode(mode === 'editing' ? 'viewing' : 'editing');
    }

    return (
        <Navbar>
            <Nav>
                <NavbarBrand href="/">TodoApp</NavbarBrand>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">My todos</NavLink>
                </NavItem>
            </Nav>
            <div className="mode-block">
                <Button color={mode === 'editing' ? 'danger' : 'warning'} onClick={switchMode}>
                    { mode }
                </Button>
            </div>
        </Navbar>
    )

}

export default Header;