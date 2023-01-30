import React, {useState} from 'react';
import {Outlet, NavLink} from 'react-router-dom';
import Footer from "./Footer";
import Wallet from "./Wallet";

const Header = () => {
    const [headerClasses, setHeaderClasses] = useState('header__nav');
    const [dropdownClasses, setDropdownClasses] = useState('dropdown-menu header__dropdown-menu');

    const onMenuClick = (e) => {
        e.preventDefault();

        if (headerClasses === 'header__nav') {
            setHeaderClasses('header__nav header__nav--active');
        } else if(headerClasses === 'header__nav header__nav--active') {
            setHeaderClasses('header__nav');
        }
    }

    const onMoreButtonClick = (e) => {
        e.preventDefault();

        if (dropdownClasses === 'dropdown-menu header__dropdown-menu') {
            setDropdownClasses('dropdown-menu header__dropdown-menu show');
        } else if(dropdownClasses === 'dropdown-menu header__dropdown-menu show') {
            setDropdownClasses('dropdown-menu header__dropdown-menu');
        }
    }

    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">
                                {/*btn*/}
                                <button className="header__btn" type="button" aria-label="header__nav" onClick={onMenuClick}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                {/*end btn*/}

                                {/*logo*/}
                                <NavLink to="/" className="header__logo">
                                    {/*<img src="img/logo.svg" alt=""/>*/}
                                </NavLink>
                                {/*end logo*/}

                                {/*tagline*/}
                                <span className="header__tagline">NFT by Hand<br/></span>
                                {/*end tagline*/}

                                {/*navigation*/}
                                <ul className={headerClasses} id="header__nav">
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <NavLink to="/launchpads/list">Explore</NavLink>*/}
                                    {/*</li>*/}
                                    <li>
                                        <NavLink to="/create">Create</NavLink>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <NavLink to="/profile">Profile</NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a href="#" className="dropdown-toggle" onClick={onMoreButtonClick}>More*/}
                                    {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>*/}
                                    {/*    </a>*/}
                                    {/*    <ul className={dropdownClasses}>*/}
                                    {/*        <li><NavLink to="/about">About</NavLink></li>*/}
                                    {/*        <li><NavLink to="/contact">Contact</NavLink></li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <NavLink to="/launchpads/0x8D13D9b43F07BF112738baEFdDE123a212b20572">*/}
                                    {/*        A launchpad*/}
                                    {/*    </NavLink>*/}
                                    {/*</li>*/}
                                </ul>
                                {/*end navigation*/}

                                <Wallet/>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Outlet/>

            <Footer/>

        </React.Fragment>
    )
}

export default Header;