import React from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';

Menu.propTypes = {
    menusList: PropTypes.array,
};

Menu.defaultProps = {
    menusList: [],
}

function Menu(props) {
    const { menusList } = props;
    const { asPath } = useRouter();

    const showMenus = (Menus, parentId = '0') => {
        var result = null;
        var tempMenu = [];
        var subMenuList = [];
        if (Menus.length > 0) {
            Menus.map((menu, index) => {
                if (menu.status === true) {
                    if (menu.parent === parentId) {
                        tempMenu.push(menu);
                    } else {
                        subMenuList[index] = menu;
                    }
                }
            });
        }
        if (tempMenu.length > 0) {
            result = tempMenu.map((menu, index) => {

                if (asPath === menu.alias) {
                    return (
                        <Nav.Link key={index} href={menu.alias} className="active">{menu.name}</Nav.Link>
                    )
                } else {
                    return (
                        <Nav.Link key={index} href={menu.alias}>{menu.name}</Nav.Link>
                    )
                }

            });
        }
        return result;
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ml-auto">
                    {showMenus(menusList)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;