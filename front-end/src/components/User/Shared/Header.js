import React, {useState} from 'react';
import {Outlet, NavLink} from 'react-router-dom';
import Footer from "./Footer";
import Wallet from "./Wallet";
import logo from '../../../assets/img/logo/nft-by-hand-white-logo.png'

const Header = () => {
    const [headerClasses, setHeaderClasses] = useState('header__nav');
    const [dropdownClasses, setDropdownClasses] = useState('dropdown-menu header__dropdown-menu');

    const toggleHamburgerMenu = () => {
        if (headerClasses === 'header__nav') {
            setHeaderClasses('header__nav header__nav--active');
        } else if(headerClasses === 'header__nav header__nav--active') {
            setHeaderClasses('header__nav');
        }
    }

    const onMenuClick = (e) => {
        e.preventDefault();

        toggleHamburgerMenu();
    }

    const onMenuItemClick = (e) => {
        toggleHamburgerMenu();
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
                                    <img src={logo} alt=""/>
                                </NavLink>
                                {/*end logo*/}

                                {/*tagline*/}
                                    <span className="header__tagline"
                                          style={{display: 'unset', color: 'white'}}>
                                          {/*style={{display: 'unset', color: 'white', marginLeft: '-120px'}}>*/}
                                        NFT by Hand
                                    </span>
                                {/*end tagline*/}

                                {/*navigation*/}
                                <ul className={headerClasses} id="header__nav">
                                    <li>
                                        <NavLink to="/" onClick={onMenuItemClick}>Home</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/explore" onClick={onMenuItemClick}>Explore</NavLink>
                                    </li>

                                    {/*<li>*/}
                                    {/*    <NavLink to="/create" onClick={onMenuItemClick}>Create</NavLink>*/}
                                    {/*</li>*/}

                                    <li>
                                        <NavLink to="/profile" onClick={onMenuItemClick}>Profile</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/contact" onClick={onMenuItemClick}>Contact</NavLink>
                                    </li>

                                    {/*<li>*/}
                                    {/*    <NavLink to="/about" onClick={onMenuItemClick}>About</NavLink>*/}
                                    {/*</li>*/}

                                </ul>
                                {/*end navigation*/}

                                <Wallet prevRoute={null}/>

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