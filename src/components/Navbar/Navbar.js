import React from "react";
import classes  from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import SideBar from "./sideBar/SideBar";
import SideBarContainer from "./sideBar/SideBarContainer";



const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item}`}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.activeLink}>users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.activeLink}>news</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.activeLink}>music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.activeLink}>settings</NavLink>
            </div>
            <SideBarContainer />
        </nav>
    )
}
export default Navbar