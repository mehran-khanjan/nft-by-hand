import React from 'react';
import logo1 from '../../../assets/img/sponsors/logo2.svg'
import logo2 from '../../../assets/img/sponsors/logo5.svg'
import logo3 from '../../../assets/img/sponsors/logo8.svg'
import logo4 from '../../../assets/img/sponsors/logo2.svg'

const RoadMap = () => {
    return(
        <React.Fragment>
            {/*roadmap*/}
            {/* roadmap */}
            <section className="section section--light">
                <div className="container">
                    <div className="row">
                        {/* section title */}
                        <div className="col-12">
                            <div className="section__title section__title--carousel">
                                <h2>Roadmap</h2>
                            </div>
                        </div>
                        {/* end section title */}

                        {/* carousel */}
                        <div className="col-12">
                            <div className="section__carousel section__carousel--block splide--block">
                                <div className="splide__arrows">
                                    <button className="splide__arrow splide__arrow--prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"></path></svg></button>
                                    <button className="splide__arrow splide__arrow--next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path></svg></button>
                                </div>

                                <div className="splide__track">
                                    <ul className="splide__list">
                                        <li className="splide__slide" style={{width: '33%'}}>
                                            <div className="roadmap roadmap--active">
                                                <h3 className="roadmap__title">2021 Q4</h3>
                                                <ul className="roadmap__list">
                                                    <li>Project start</li>
                                                    <li>Tiers system</li>
                                                    <li>Tokenomics</li>
                                                    <li>Seed round</li>
                                                    <li>Aggregator – MVP</li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="splide__slide" style={{width: '33%'}}>
                                            <div className="roadmap roadmap--active">
                                                <h3 className="roadmap__title">2022 Q1</h3>
                                                <ul className="roadmap__list">
                                                    <li>Aggregator – Alpha</li>
                                                    <li>MVP Launchpad</li>
                                                    <li>Private round</li>
                                                    <li>Strategic round</li>
                                                    <li>GameFi ratings</li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="splide__slide" style={{width: '33%'}}>
                                            <div className="roadmap">
                                                <h3 className="roadmap__title">2022 Q2</h3>
                                                <ul className="roadmap__list">
                                                    <li>Aggregator – Beta</li>
                                                    <li>Smart contract audit</li>
                                                    <li>KYC integration</li>
                                                    <li>Launchpad – Beta</li>
                                                    <li>Public round</li>
                                                </ul>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* end carousel */}
                    </div>
                </div>

                <div id="canvas2" className="section__canvas"></div>
            </section>
            {/* end roadmap */}

            {/* resources */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        {/* section title */}
                        <div className="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                            <div className="section__title">
                                <h2>Download The Resources</h2>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                        {/* end section title */}
                    </div>
                </div>

                <div className="container">
                    <div className="row row--grid">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="resources">
						<span className="resources__icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/></svg>
						</span>
                                <h3 className="resources__title">Whitepaper</h3>
                                <p className="resources__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <a href="#" className="resources__link">Download</a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="resources resources--green">
						<span className="resources__icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Z"/></svg>
						</span>
                                <h3 className="resources__title">Litepaper</h3>
                                <p className="resources__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <a href="#" className="resources__link">Download</a>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="resources resources--light">
						<span className="resources__icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,20H8a3,3,0,0,1-3-3V7A1,1,0,0,0,3,7V17a5,5,0,0,0,5,5h8a1,1,0,0,0,0-2Zm-6-7a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H11A1,1,0,0,0,10,13ZM21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,14.05,2H10A3,3,0,0,0,7,5V15a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM19,15a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,.18,1H11a1,1,0,0,0,0,2h8Z"/></svg>
						</span>
                                <h3 className="resources__title">Pitch Deck</h3>
                                <p className="resources__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                <a href="#" className="resources__link">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end resources */}

            {/* sponsors */}
            <section className="section section--light">
                <div className="container">
                    <div className="row">
                        {/* section title */}
                        <div className="col-12">
                            <div className="section__title section__title--between">
                                <h2>Some Of Our <br/>Awesome Partners</h2>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'. <br/><a href="contacts.html">Become a partner.</a></p>
                            </div>
                        </div>
                        {/* end section title */}

                        {/* sponsors */}
                        <div className="col-12">
                            <ul className="sponsors">
                                <li>
                                    <a href="#">
                                        <img src={logo1} alt=""/>
                                            <span>thesponsor.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={logo2} alt=""/>
                                            <span>thesponsor.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={logo3} alt=""/>
                                            <span>thesponsor.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={logo4} alt=""/>
                                            <span>thesponsor.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* end sponsors */}
                    </div>
                </div>
            </section>
            {/* end sponsors */}

            {/* faq */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        {/* section title */}
                        <div className="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                            <div className="section__title">
                                <h2><a href="faq.html">Frequently Asked Questions</a></h2>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                        {/* end section title */}

                        {/* accordion */}
                        <div className="col-12">
                            <div className="accordion" id="accordion">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="accordion__card">
                                            <button className="" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                                How we can buy and invest token?
                                                <span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
										</span>
                                            </button>

                                            <div id="collapse1" className="collapse" data-parent="#accordion">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page <b>when looking at its layout</b>. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                            </div>
                                        </div>

                                        <div className="accordion__card">
                                            <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                How secure is this token?
                                                <span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
										</span>
                                            </button>

                                            <div id="collapse2" className="collapse" data-parent="#accordion">
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                        </div>

                                        <div className="accordion__card">
                                            <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                What are long-tail and short-tail assets?
                                                <span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
										</span>
                                            </button>

                                            <div id="collapse3" className="collapse" data-parent="#accordion">
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                            </div>
                                        </div>

                                        <div className="accordion__card">
                                            <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                When the pool is added after 3 days?
                                                <span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
										</span>
                                            </button>

                                            <div id="collapse4" className="collapse" data-parent="#accordion">
                                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="accordion__card">
                                            <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                What are the biggest risks to your growth?
                                                <span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
										</span>
                                            </button>

                                            <div id="collapse5" className="collapse" data-parent="#accordion">
                                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                            </div>
                                        </div>

                                        <div className="accordion__card">
                                            <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                What is your contract address?
                                                <span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
										</span>
                                            </button>

                                            <div id="collapse6" className="collapse" data-parent="#accordion">
                                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            </div>
                                        </div>

                                        <div className="accordion__card">
                                            <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                                What is IDO Whale?
                                                <span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
										</span>
                                            </button>

                                            <div id="collapse7" className="collapse" data-parent="#accordion">
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                        </div>

                                        <div className="accordion__card">
                                            <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                Where we can buy and sell NFts?
                                                <span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/></svg>
										</span>
                                            </button>

                                            <div id="collapse8" className="collapse" data-parent="#accordion">
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end accordion */}
                    </div>
                </div>
            </section>
            {/* end faq */}
        </React.Fragment>
    )
}

export default RoadMap;