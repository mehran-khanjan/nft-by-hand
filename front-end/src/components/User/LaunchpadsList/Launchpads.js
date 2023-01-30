import React from 'react';
import LaunchpadItem from "./LaunchpadItem";
const {v4: uuidv4} = require('uuid');

const Launchpads = (props) => {
    return (
        <React.Fragment>
            <section className="section section--first">
                {/*section head*/}
                <div className="section__head">
                    <div className="container">
                        <div className="row">
                            {/*breadcrumb*/}
                            <div className="col-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb__item breadcrumb__item--active">Aggregator</li>
                                </ul>
                            </div>
                            {/*end breadcrumb*/}

                            {/*section title*/}
                            <div className="col-12">
                                <div className="section__title section__title--left section__title--page">
                                    <h1>GameFi Aggregator</h1>
                                </div>
                            </div>
                            {/*end section title*/}
                        </div>
                    </div>

                    {/*bg animation*/}
                    <div id="canvas2" className="section__canvas"></div>
                    {/*end bg animation*/}
                </div>
                {/*end section head*/}

                {/*filter*/}
                <div className="filter">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="filter__content">
                                    <form action="#" className="filter__search">
                                        <input type="text" placeholder="Search..."/>
                                        <button type="button" aria-label="Search">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/>
                                            </svg>
                                        </button>
                                    </form>

                                    <div className="filter__wrap">
                                        <select className="filter__select" name="blockchain"
                                                style={{marginLeft: '5px'}}>
                                            <option value="0">All blockchains</option>
                                            <option value="1">Avalanche</option>
                                            <option value="2">Binance</option>
                                            <option value="3">Bitcoin</option>
                                            <option value="4">Cardano</option>
                                            <option value="5">Ethereum</option>
                                            <option value="6">Flow</option>
                                            <option value="7">Harmony</option>
                                            <option value="8">Litecoin</option>
                                            <option value="9">Near</option>
                                            <option value="10">NEO</option>
                                            <option value="11">Other</option>
                                        </select>

                                        <select className="filter__select" name="devices" style={{marginLeft: '5px'}}>
                                            <option value="0">All devices</option>
                                            <option value="1">Android</option>
                                            <option value="2">IOS</option>
                                            <option value="3">Linux</option>
                                            <option value="4">MAC</option>
                                            <option value="5">Playstation</option>
                                            <option value="6">Web</option>
                                            <option value="7">Windows</option>
                                            <option value="8">XBOX</option>
                                        </select>

                                        <select className="filter__select" name="status" style={{marginLeft: '5px'}}>
                                            <option value="0">Public status</option>
                                            <option value="1">Alpha</option>
                                            <option value="2">Beta</option>
                                            <option value="3">Cancelled</option>
                                            <option value="4">Development</option>
                                            <option value="5">Live</option>
                                            <option value="6">Presale</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end filter*/}

                {/*games*/}
                <div className="container">
                    <div className="row row--grid">

                        {/*{ !props.launchpadsArray ? <div>Loading</div> : null }*/}

                        {props.launchpadsArray.length === 0
                            && <div>No launchpad exist</div>
                        }

                        {props.launchpadsArray.length > 0 &&
                            props.launchpadsArray.map((launchpadItem) => {
                                return <LaunchpadItem key={uuidv4()} launchpadData={launchpadItem}/>
                            })
                        }

                    </div>

                    {/*paginator*/}
                    <div className="row">
                        <div className="col-12">
                            <div className="paginator">
                                <span className="paginator__pages">12 from 169</span>

                                <ul className="paginator__list">
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*end paginator*/}
                </div>
                {/*end games*/}
            </section>
        </React.Fragment>
    )
}

export default Launchpads;