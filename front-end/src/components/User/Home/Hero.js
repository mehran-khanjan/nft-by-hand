import React from 'react';

const Hero = () => {
    return(
        <React.Fragment>
            <section className="hero" id="hero">
                <div className="container">
                    <div className="row row--grid">
                        <div className="col-12">
                            {/*hero content*/}
                            <div className="hero__content">
                                <span className="hero__tagline">NFT By Hand</span>
                                <h2 className="hero__title">NFT Marketplace for handicrafts</h2>
                                <p className="hero__text">Physical NFT</p>
                                <div className="hero__btns">
                                    <a href="aggregator.html" className="hero__btn"><span>Explore</span></a>
                                    <a href="add.html" className="hero__btn hero__btn--nephrite"><span>Contact</span></a>
                                </div>

                                {/*bg animation*/}
                                <div id="canvas" className="hero__canvas"></div>
                                {/*end bg animation*/}
                            </div>
                            {/*end hero content*/}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Hero;