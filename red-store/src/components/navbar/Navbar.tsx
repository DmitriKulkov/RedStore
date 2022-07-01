import React, {FormEvent, FormEventHandler, MouseEventHandler, useState} from 'react'
import classes from "./Navbar.module.css"
import NavbarButton from "./navbarButton/NavbarButton";
import Search from "../search-bar/Search";
import LoginButton from "./loginButton/LoginButton";
import logo from "./logo.png"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {changeName} from "../../filters/action-creators/filters";

const Navbar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {filters} = useTypedSelector(filters => filters)
    return (
        <header className={classes.navbar}>
            <div className={classes.headbar}>
                <img src={logo} className={classes.logo} alt='logo'/>
                <Link to={'/home'} className={classes.headbar__link}>
                    <h1 className={classes.headbar__h1}>RedShop</h1>
                </Link>
            </div>
            <nav className={classes.buttonbar}>
                <div className={classes.buttons__container}>
                    <div className={classes.buttons}>
                        <NavbarButton link={'/search'}>New!</NavbarButton>
                        <NavbarButton link={'/search'}>Clothes</NavbarButton>
                        <NavbarButton link={'/search'}>Shoes</NavbarButton>
                        <NavbarButton link={'/search'}>Collections</NavbarButton>
                    </div>
                    <div className={classes.search__container}>
                        <Search
                            value={search}
                            onChange={(value)=>setSearch(value)}
                            onSubmit={(e)=> {
                                e.preventDefault()
                                navigate('/search')
                                changeName(search)(dispatch)
                            }}
                            onClick={(e)=> {
                                e.preventDefault()
                                navigate('/search')
                                changeName(search)(dispatch)
                            }}
                        />
                    </div>
                    <div className={classes.login_buttons__container}>
                            <LoginButton>Log in</LoginButton>
                            <LoginButton>Sign in</LoginButton>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;