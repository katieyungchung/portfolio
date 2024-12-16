import React from 'react';  
import HomeAnimation from './assets/vid.mp4';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="home-header">

            <div className="home-bio">
                <h1>Hi, I'm Katie!</h1>
                <p>I’M CURRENTLY AT UCLA STUDYING COMPUTER SCIENCE AND ENGINEERING WITH AN INTEREST IN HUMAN COMPUTER INTERACTION, COMPUTER GRAPHICS/ANIMATION, AND UI/UX DESIGN</p>

                <p>UNDERGRADUATE RESEARCHER</p>
                <p>@ COMPUTING AND DISCOVERY LAB</p>
                <p>WEB DEVELOPER AND DESIGNER</p>
                <p>@ ANDERSON SCHOOL OF MANAGEMENT</p>
            </div>
            
            <video className="home-animation" autoPlay loop muted controlsList="noplaybackrate nodownload" disablePictureInPicture width="600">
                <source src={HomeAnimation} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* <div className="home-bio">
                <h1>Hi, I'm Katie! I'm a 2nd year Computer Science and Engineering student <br></br> with a passion for interdisciplinary art and technology.</h1>
            </div> */}
            
            </div>
        </>
    );
}

export default Home;