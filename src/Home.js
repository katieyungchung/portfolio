import React from 'react';  
import HomeAnimation from './assets/vid.mp4';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="home-header">
            
            <video className="home-animation" autoPlay loop muted controlsList="noplaybackrate nodownload" disablePictureInPicture width="600">
                <source src={HomeAnimation} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="home-bio">
                <h1>Hi, I'm Katie! I'm a 2nd year Computer Science and Engineering student <br></br> with a passion for interdisciplinary art and technology.</h1>
            </div>
            
            </div>
        </>
    );
}

export default Home;