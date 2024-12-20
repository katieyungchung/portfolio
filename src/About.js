import React from 'react';  
import './About.css';
import HomeAnimation2 from './assets/home-animation.mp4';

const About = () => {

    return (
        <div className="about-page">
        <h1>About</h1>
        <div className="about-div">
            <div className="about-text">
                <p>Hi I’m Katie (she/her)! I’m a 2nd year Computer Science and Engineering student at UCLA. I’m passionate about the intersection between art and technology, namely human-computer interaction, computer graphics & animation, and UI/UX Design. 
                    <br></br><br></br>
                    I’m also passionate about ethics and making tech more accessible for everyone. I’m a student organizer for QWER Hacks, a hackathon that empowers the LGBTQIA+ community. 
                    <br></br>
                    <br></br>I also have a small art business [ hua 花 studios ] where I occasionally booth at craft fairs, and a past life where I did videography & photography. 
                    <br></br><br></br>You can often find me debugging a coding project, sketching on my iPad, drinking a cup of oolong boba milk tea, or watching the newest animated movie/show (Arcane!). </p>
            </div>


            <video className="about-animation" autoPlay loop muted controlsList="noplaybackrate nodownload" disablePictureInPicture width="600">
                <source src={HomeAnimation2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
        </div>
        <div className="about-gallery">
        </div>
        </div>
    );
}

export default About;