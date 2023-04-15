import React from 'react';
import {Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Layout.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../assets/ItineroLogo.png"
import { PreferencesProvider } from '../context/preferencesContext';

const Layout = () => {
    return (
        <PreferencesProvider>
            <main>
                <nav className="nav-el">
                        <ul>
                            <li className="logo-item"><Link to="/Home"><img src={logo} alt="Itinero logo" className="logo-img"/></Link></li>
                            <li><Link to="/BuildItinerary">Create an Itinerary!</Link></li>
                            <li><Link to="/Profile"><AccountCircleIcon/></Link></li>
                        </ul>
                </nav>

                <div className="page-container"><Outlet/></div>

                <footer></footer>
            </main>
        </PreferencesProvider>
    );
};

export default Layout;