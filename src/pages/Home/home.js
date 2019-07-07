import React from 'react';
import "./home.css";
import NavBubbles from '../../components/NavBubbles';

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <h1 className="main-header">David <span className="last-name">Brocker</span></h1>
                <h6 className="sub-header">Front End Web Developer.<span> Designer.</span> Ninja.</h6>
            </div>
            <NavBubbles />
        </div>
    )
}

export default Home;