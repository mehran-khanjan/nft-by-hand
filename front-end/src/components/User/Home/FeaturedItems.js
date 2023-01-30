import React from 'react';

const FeaturedItems = () => {
    return(
        <React.Fragment>
            {/*games*/}
            <section className="section section--bt">
                <div className="container">
                    <div className="row">
                        {/*section title*/}
                        <div className="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                            <div className="section__title">
                                <strong>Play to Earn</strong>
                                <h2><a href="aggregator.html">Latest Games</a></h2>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                        {/*end section title*/}
                    </div>

                    <div className="row row--grid">

                        {/*game*/}
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="game">
                                <div className="game__head">
                                    <div className="game__cover">
                                        <img src="img/games/1.png" alt=""/>
                                    </div>

                                    <div className="game__title">
                                        <h3 className="game__name">
                                            <a href="game.html">Miniature Khatam Marquetry</a>
                                        </h3>
                                        {/*<span className="game__blockchain">*/}
                                        {/*    Blockchains*/}
                                        {/*    <img src="img/blockchain/1.png" alt=""/>*/}
                                        {/*    <img src="img/blockchain/2.png" alt=""/>*/}
								        {/*</span>*/}
                                    </div>
                                </div>

                                <p className="game__description">
                                    The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.
                                </p>

                                <ul className="game__list">
                                    <li>
                                        A <span>A</span>
                                    </li>
                                    <li>
                                        B <span className="required">B</span>
                                    </li>
                                    <li>
                                        C <span className="required">C</span>
                                    </li>
                                    <li>
                                        D <span className="process">D</span>
                                    </li>
                                </ul>

                                <a href="#" className="game__more"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg></a>
                            </div>
                        </div>
                        {/*end game*/}


                    </div>
                </div>
            </section>
            {/*end games*/}
        </React.Fragment>
    )
}

export default FeaturedItems;