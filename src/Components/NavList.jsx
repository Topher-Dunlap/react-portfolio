import React from 'react';
import {NavLink} from 'react-router-dom';
import {AiOutlineMail, AiOutlineMedium} from "react-icons/ai";
import {BiHome} from "react-icons/bi";
import {BsPerson, BsGrid} from "react-icons/bs";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import 'ui-neumorphism/dist/index.css'

export default function NavList(props) {
    return (
        <div style={navContainer}>
            <ul>
                <ButtonGroup aria-label="text primary button group">
                    <Button style={navItem}>
                        <NavLink
                            exact to="/"
                            activeClassName="isActive"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#B3A577"
                            }}>
                            <BiHome/>
                        </NavLink>
                    </Button>
                    <Button style={navItem}>
                        <NavLink
                            to="/about"
                            activeClassName="isActive"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#B3A577"
                            }}>
                            <BsPerson/>
                        </NavLink>
                    </Button>
                    <Button style={navItem}>
                        <NavLink
                            to='/projects'
                            activeClassName="isActive"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#B3A577"
                            }}>
                            <BsGrid/>
                        </NavLink>
                    </Button>
                    <Button style={navItem}>
                        <NavLink
                            to='/articles'
                            activeClassName="isActive"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#B3A577"
                            }}>
                            <AiOutlineMedium/>
                        </NavLink>
                    </Button>
                    <Button style={navItem}>
                        <NavLink
                            to='/contact'
                            activeClassName="isActive"
                            style={navItem}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#B3A577"
                            }}>
                            <AiOutlineMail/>
                        </NavLink>
                    </Button>
                </ButtonGroup>
            </ul>
        </div>
    )
}

const navContainer = {
    textAlign: "center",
    marginBottom: "3rem",
    marginTop: "2rem",
}

// const headerLightPurple = {
//     color: "#99b0e0",
// }

const navItem = {
    fontSize: "large",
    marginLeft: "10px",
    marginRight: "10px",
    color: "white",
    borderColor: "white",
}