import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

// User pages and components
import Home from "./pages/User/Home";
import Create from "./pages/User/Create";
import ConnectWallet from "./pages/Shared/ConnectWallet";
import LaunchpadsList from "./pages/User/LaunchpadsList";
import LaunchpadSingle from "./pages/User/LaunchpadSingle";
import Profile from "./pages/User/Profile";
import NoPage from "./pages/Shared/NoPage";
import Header from "./components/User/Shared/Header";
import RouteGuard from "./components/User/Shared/RouteGaurd";
import Auth from "./components/User/Shared/Auth";
import LaunchpadSingle1 from "./pages/User/LaunchpadSingle1";

// Admin pages and components

function App() {
  return (
      <BrowserRouter>
        {/*<Auth/>*/}

        <Routes>

          {/*User routes*/}
          {/*<Route path="/" element={<Header/>}>*/}
          {/*  <Route index element={<Home/>}/>*/}
          {/*  <Route path="/about" element={<Home/>}/>*/}
          {/*  <Route path="/contact" element={<Home/>}/>*/}
          {/*  <Route path="/connect-wallet" element={<ConnectWallet/>}/>*/}
          {/*</Route>*/}
          {/*<Route element={<React.Fragment><RouteGuard/></React.Fragment>}>*/}
          {/*  <Route path="/launchpads/list" element={<LaunchpadsList/>}/>*/}
          {/*  <Route path="/launchpads/:launchpadContractAddress" element={<LaunchpadSingle/>}/>*/}
          {/*  <Route path="/launchpads/create" element={<Create/>}/>*/}
          {/*  <Route path="/profile" element={<Profile/>}/>*/}
          {/*</Route>*/}
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path="/explore" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path={`/assets/bnb/${process.env.REACT_APP_TOKEN_1_TX_HASH}`} element={<LaunchpadSingle1/>}/>
            <Route path={`/assets/bnb/${process.env.REACT_APP_TOKEN_2_TX_HASH}`} element={<Home/>}/>
            <Route path="/about" element={<Home/>}/>
            <Route path="/contact" element={<Home/>}/>
            <Route path="/connect-wallet" element={<ConnectWallet/>}/>
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
