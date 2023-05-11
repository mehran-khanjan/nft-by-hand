import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

// User pages and components
import Home from "./pages/User/Home";
import Create from "./pages/User/Create";
import ConnectWallet from "./pages/Shared/ConnectWallet";
import Explore from "./pages/User/Explore";
import Profile from "./pages/User/Profile";
import NoPage from "./pages/Shared/NoPage";
import Header from "./components/User/Shared/Header";
import RouteGuard from "./components/User/Shared/RouteGaurd";
import Auth from "./components/User/Shared/Auth";
import Single from "./pages/User/Single";
import Contact from "./pages/User/Contact";

// Admin pages and components

function App() {
    return (
        <BrowserRouter>
            {/*<Auth/>*/}

            <Routes>

                {/*User routes*/}
                <Route path="/" element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/explore" element={<Explore/>}/>
                    <Route path="/assets/:chainSymbol/:contractAddress/:tokenId" element={<Single/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<Home/>}/>
                    <Route path="/connect-wallet" element={<ConnectWallet/>}/>
                </Route>

                <Route element={<React.Fragment><RouteGuard/></React.Fragment>}>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Route>

                {/*Admin routes*/}
                {/*<Route path="/admin">*/}
                {/*    <Route index />*/}
                {/*</Route>*/}

                {/*404 Route*/}
                <Route>
                    <Route path="*" element={<NoPage/>}/>
                </Route>                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
