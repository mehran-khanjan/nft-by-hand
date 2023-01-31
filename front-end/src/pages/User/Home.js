import React from 'react';
import Hero from "../../components/User/Home/Hero";
import {Helmet} from "react-helmet";
import FeaturedItems from "../../components/User/Home/FeaturedItems";
import RoadMap from "../../components/User/Home/RoadMap";

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>
                    A Marketplace for trading handicrafts with physical NFTs | NFT by Hand
                </title>
            </Helmet>

            <Hero/>

            <FeaturedItems/>

            <RoadMap/>

        </React.Fragment>
    )
}

export default Home;