import React from 'react';
import {Link} from "react-router-dom";

const NoPage = () => {
    return(
        <React.Fragment>
            {/*page wrap*/}
            <div className="section section--content">
                <div className="section__content">
                    {/* error */}
                    <div className="page-404">
                        <h1 className="page-404__title">404</h1>
                        <p className="page-404__text">The page you are looking for not available!</p>
                        <Link to="/" className="page-404__btn">Go Back Home</Link>
                    </div>
                    {/* end error */}
                </div>

                {/* bg animation */}
                <div id="canvas2" className="section__canvas"></div>
                {/* end bg animation */}
            </div>
            {/* end page wrap */}
        </React.Fragment>
    )
}

export default NoPage;