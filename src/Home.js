import React from 'react';  
import HomeAnimation from './assets/vid.mp4';
import HomeAnimation2 from './assets/home-animation.mp4';
import './Home.css';
import CandiidImg from './assets/candiid-img.png';
import SignBridgeImg from './assets/signbridge-img.png';
import NomNomsImg from './assets/nomnoms-img.png';
import TimeLeafImg from './assets/time-leaf.png';
import SanctuaryImg from './assets/sanctuary.png';
import RoseGardenImg from './assets/rose-garden.png';
import RabbitHoleImg from './assets/rabbit-hole.png';


const Home = () => {

    const divStyle1 = {
        backgroundImage: `url(${NomNomsImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const divStyle2 = {
        backgroundImage: `url(${SignBridgeImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const divStyle3 = {
        backgroundImage: `url(${CandiidImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const divStyle4 = {
        backgroundImage: `url(${TimeLeafImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const divStyle5 = {
        backgroundImage: `url(${SanctuaryImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '1px solid rgba(72, 72, 72, 0.2)',
        borderRadius: '10px', // Optional: rounded corners
    };

    const divStyle6 = {
        backgroundImage: `url(${RabbitHoleImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '1px solid rgba(72, 72, 72, 0.2)',
        borderRadius: '10px', // Optional: rounded corners
    };

    const divStyle7 = {
        backgroundImage: `url(${RoseGardenImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '1px solid rgba(72, 72, 72, 0.2)',
        borderRadius: '10px', // Optional: rounded corners
    };

    return (
        <>
            <div className="home-header">

            <div className="home-bio">
                <h1>Hi, I'm <span style={{ color: '#70A068', }}>Katie!</span></h1>
                <p>I'm currently at UCLA studying Computer Science and Engineering with an interest in human-computer interaction, computer graphics/animation, generative AI, and UI/UX Design 👩🏻‍💻</p>
                <br></br>
                <p className="home-bio-link">Undergraduate student 📖</p>
                <a href="https://eunicemjun.com/bio/" target="_blank"><p className="home-bio-link1"> @ <span style={{ color: '#70A068'}}>Computing and Discovery Lab</span>  <span style={{ fontSize: '25px', color: '#70A068' }}>↗</span></p></a>
                
                <p className="home-bio-link">Web Developer & Designer 🖌️ </p>
                <a href="https://www.anderson.ucla.edu/alumni" target="_blank"><p className="home-bio-link1"> @ <span style={{ color: '#70A068'}}> Anderson School of Management</span>  <span style={{ fontSize: '25px', color: '#70A068' }}>↗</span></p></a>
            </div>
            
            <video className="home-animation1" autoPlay loop muted controlsList="noplaybackrate nodownload" disablePictureInPicture width="600">
                <source src={HomeAnimation} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            </div>

            <h1 className="home-projects-h1">Featured Works</h1>

            <a href="https://preview--rabbit-hole-artist-guide.lovable.app/" target="_blank"> 
            <div className="home-projects">
                <div className="home-project-img" style={divStyle6}></div>
               
                <div className="home-project-description">
                    <h1>🐇 Rabbit Hole</h1>
                    <p>Re-envisioning an artist's search history</p>
                    <div className="home-tags">
                        <div className="home-tag">Human-Computer Interaction</div>
                        <div className="home-tag">User Research</div>
                        <div className="home-tag">Web App Development</div>
                        <div className="home-tag">UI/UX Design</div>
                        <div className="home-tag">React Native</div>
                    </div>
                </div>
            </div>
            </a>

            <a href="https://www.figma.com/slides/Vj6YG6sxcABZPSEc6Ry2dA/FIGMA-SLIDES?node-id=1-499&t=8hPHN6W8Q8Psz2GY-1" target="_blank">
            <div className="home-projects" id="proj2div">
                <div className="home-project-description" id="proj2">
                    <h1>🌹 Rose Garden</h1>
                    {/* <p>Making the process of learning American Sign Language (ASL) more accessible with powerful AI tools.</p> */}
                    <p>A reflective and relaxing journaling mobile app</p>
                    <div className="home-tags" id="proj4-tags"> 
                        <div className="home-tag">Full Stack App Development</div>
                        <div className="home-tag">React Native</div>
                        <div className="home-tag">SQLite</div>
                       
                    </div>
                </div>
                <div className="home-project-img" style={divStyle7}></div>
            </div>
            </a>

            <a href="https://www.canva.com/design/DAGj16LSylY/1b9LKOLGttbPr8mWwW5h3g/edit?utm_content=DAGj16LSylY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank"> 
            <div className="home-projects">
                <div className="home-project-img" style={divStyle5}></div>
               
                <div className="home-project-description">
                    <h1>🌿 Sanctuary</h1>
                    <p>Building safer communities for women and marginalized genders with safety maps, incident reports, safe walk, and more!</p>
                    <div className="home-tags">
                        <div className="home-tag">Mobile App Development</div>
                        <div className="home-tag">Frontend Development</div>
                        <div className="home-tag">React Native</div>
                        <div className="home-tag">HTML/CSS</div>
                    </div>
                </div>
            </div>
            </a>

            <a href="https://www.youtube.com/watch?v=-2mBjjXesno" target="_blank">
            <div className="home-projects" id="proj2div">
                <div className="home-project-description" id="proj2">
                    <h1>🌱 Time Leaf</h1>
                    {/* <p>Making the process of learning American Sign Language (ASL) more accessible with powerful AI tools.</p> */}
                    <p>Discover new passions with an AI personalized quiz, and learn new skills and track your engagement with your hobbies!</p>
                    <div className="home-tags" id="proj4-tags"> 
                        <div className="home-tag">Full Stack Development</div>
                        <div className="home-tag">Google Gemini AI</div>
                        <div className="home-tag">MongoDB Atlas</div>
                        <div className="home-tag">UI/UX Design</div>
                        <div className="home-tag">Illustration</div>
                    </div>
                </div>
                <div className="home-project-img" style={divStyle4}></div>
            </div>
            </a>

            <a href="https://youtu.be/a5zCg09IoQU" target="_blank"> 
            <div className="home-projects">
                <div className="home-project-img" style={divStyle1}>
                    {/* <img src={NomNomsImg} alt="NomNoms app design"/> */}
                </div>
               
                <div className="home-project-description">
                    <h1>🍔 NomNoms</h1>
                    <p>Creating a community for restaurant owners and foodies to come together and discover new food! </p>
                    <div className="home-tags">
                        <div className="home-tag">Frontend Development</div>
                        <div className="home-tag">UI/UX Design</div>
                    </div>
                </div>
            </div>
            </a>

            <a href="https://docs.google.com/presentation/d/1cBbBwxESN827hElh_WEPNk4qZx3_NU_C/edit?usp=sharing&ouid=114504858767344689663&rtpof=true&sd=true" target="_blank">
            <div className="home-projects" id="proj2div">
                <div className="home-project-description" id="proj2">
                    <h1>🤟 SignBridge</h1>
                    {/* <p>Making the process of learning American Sign Language (ASL) more accessible with powerful AI tools.</p> */}
                    <p>Making the process of learning American Sign Language (ASL) more accessible with powerful AI tools.</p>
                    <div className="home-tags">
                        <div className="home-tag">UI/UX Design</div>
                        <div className="home-tag">Branding</div>
                        <div className="home-tag">Marketing</div>
                    </div>
                </div>
                <div className="home-project-img" style={divStyle2}></div>
            </div>
            </a>
            <a href="https://docs.google.com/presentation/d/1RtLDU5tFFY4XBTAHZeaua-Gp6XVlwIxIA4T1RY6Tspw/edit?usp=sharing" target="_blank">
            <div className="home-projects">
                <div className="home-project-img" style={divStyle3}></div>
                <div className="home-project-description">
                    <h1>📸 Candiid</h1>
                    <p>A better way to plan hangouts and document unforgettable memories.</p>
                    <div className="home-tags">
                        <div className="home-tag">UI/UX Design</div>
                    </div>
                </div>
            </div>
            </a>
        </>
    );
}

export default Home;