import React from 'react';
import bigImage from "../../../assets/img/games/1-1-big.png";

const ProfileComponent = () => {
    return(
        <React.Fragment>
            {/*page head*/}
            <div className="section section--pb0 section--first">
                <div className="section__article-head" style={{backgroundColor: '#2a3755'}}>
                    <div className="container">
                        <div className="row">
                            {/*breadcrumb*/}
                            <div className="col-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb__item"><a href="aggregator.html">Profile</a></li>
                                </ul>
                            </div>
                            {/*end breadcrumb*/}

                            {/*section title*/}
                            <div className="col-12">
                                <div className="section__title section__title--left section__title--page">
                                    <h1>Profile</h1>
                                </div>
                            </div>
                            {/*end section title*/}
                        </div>
                    </div>

                    {/*bg animation*/}
                    <div id="canvas2" className="section__canvas"></div>
                    {/*end bg animation*/}
                </div>
            </div>
            {/*end page head*/}

            {/*game details*/}
            <div className="section section--article">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/*play*/}
                            <div className="play">
                                <div className="play__btns">
                                    <a href="#" className="play__btn"
                                       style={{backgroundColor: 'rgba(170,114,206,0.12)', marginLeft: '5px'}}>
                                        <span>Play</span>
                                    </a>

                                    <a href="#" className="play__btn" style={{marginLeft: '5px'}}>
                                        <span>Details</span>
                                    </a>

                                    <a href="#" className="play__btn" style={{marginLeft: '5px'}}>
                                        <span>More</span>
                                    </a>
                                </div>

                                <div className="play__text" style={{height: '100%'}}>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English.
                                    </p>
                                    <p>
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                        their default model text, and a search for 'lorem ipsum' will uncover many web
                                        sites still in their infancy. Various versions have evolved over the years,
                                        sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable.
                                    </p>
                                </div>
                            </div>
                            {/*end play*/}
                        </div>
                    </div>
                </div>
            </div>
            {/*end game details*/}
        </React.Fragment>
    )
}

export default ProfileComponent;