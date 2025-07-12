import React from 'react';  
import HomeAnimation from './assets/vid.mp4';
import './Works.css';
import CandiidImg from './assets/candiid-img.png';
import SignBridgeImg from './assets/signbridge-img.png';
import NomNomsImg from './assets/nomnoms-img.png';
import PhotoImg from './assets/photography-portfolio.png';
import KikiImg from'./assets/kikisdeliveryservice.png';
import TimeLeafImg from './assets/time-leaf.png';
import SanctuaryImg from './assets/sanctuary.png';
import RoseGardenImg from './assets/rose-garden.png';
import RabbitHoleImg from './assets/rabbit-hole.png';


const Works = () => {

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
        backgroundImage: `url(${PhotoImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };


    const divStyle5 = {
        backgroundImage: `url(${KikiImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const divStyle6 = {
        backgroundImage: `url(${TimeLeafImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const divStyle7 = {
        backgroundImage: `url(${SanctuaryImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const divStyle8 = {
        backgroundImage: `url(${RoseGardenImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

       const divStyle9 = {
        backgroundImage: `url(${RabbitHoleImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <h1 className="work-projects-h1">Works</h1>
            <p className="works-p">Click to learn more about each project!</p>

              <a href="https://preview--rabbit-hole-artist-guide.lovable.app/" target="_blank"> 
            <div className="home-projects">
                <div className="home-project-img" style={divStyle9}></div>
               
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
            <div className="home-projects">
                <div className="home-project-img" style={divStyle8}></div>
                <div className="home-project-description">
                    <h1>🌹 Rose Garden</h1>
                    {/* <p>Making the process of learning American Sign Language (ASL) more accessible with powerful AI tools.</p> */}
                    <p>A reflective and relaxing journaling mobile app</p>
                    <div className="home-tags"> 
                        <div className="home-tag">Full Stack App Development</div>
                        <div className="home-tag">React Native</div>
                        <div className="home-tag">SQLite</div>
                    </div>
                </div>
                
            </div>
            </a>

            

            <a href="https://www.canva.com/design/DAGj16LSylY/1b9LKOLGttbPr8mWwW5h3g/edit?utm_content=DAGj16LSylY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank"> 
            <div className="home-projects">
                <div className="home-project-img" style={divStyle7}></div>
               
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
            <div className="home-projects" id="proj4div">
                <div className="home-project-img" style={divStyle6}>
                    {/* <img src={NomNomsImg} alt="NomNoms app design"/> */}
                </div>
               
                <div className="home-project-description">
                    <h1>🌱 Time Leaf</h1>
                    <p>Discover new passions with an AI personalized quiz, and learn new skills and track your engagement with your hobbies! </p>
                    <div className="home-tags">
                        <div className="home-tag">Full Stack Development</div>
                        <div className="home-tag">Frontend Development</div>
                        <div className="home-tag">Backend Development</div>
                        <div className="home-tag">Google Gemini AI</div>
                        <div className="home-tag">MongoDB Atlas</div>
                        <div className="home-tag">UI/UX Design</div>
                        <div className="home-tag">Illustration</div>
                    </div>
                </div>
            </div>
            </a>





            <a href="https://youtu.be/a5zCg09IoQU" target="_blank"> 
            <div className="home-projects">
                <div className="home-project-img" style={divStyle1}>
                </div>
                <div className="home-project-description">
                    <h1>🍔 NomNoms</h1>
                    <p>Creating a community for restaurant owners and foodies to come together and discover new food! </p>
                    <div className="home-tags">
                        <div className="home-tag">Frontend Development</div>
                        <div className="home-tag">UI/UX Design</div>
                        <div className="home-tag">React</div>
                        <div className="home-tag">Node</div>
                        <div className="home-tag">Figma</div>
                        <div className="home-tag">JavaScript</div>
                        <div className="home-tag">HTML/CSS</div>
                    </div>
                </div>
            </div>
            </a>
            <a href="https://docs.google.com/presentation/d/1cBbBwxESN827hElh_WEPNk4qZx3_NU_C/edit?usp=sharing&ouid=114504858767344689663&rtpof=true&sd=true" target="_blank">
            <div className="home-projects">
                <div className="home-project-img" style={divStyle2}></div>
                <div className="home-project-description">
                    <h1>🤟 SignBridge</h1>
                    <p>Making the process of learning American Sign Language (ASL) more accessible with powerful AI tools.</p>
                    <div className="home-tags">
                        <div className="home-tag">UI/UX Design</div>
                        <div className="home-tag">Branding</div>
                        <div className="home-tag">Marketing</div>
                        <div className="home-tag">Figma</div>
                    </div>
                </div>
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
                        <div className="home-tag">Figma</div>
                    </div>
                </div>
            </div>
            </a>
            <a href="https://various-rune-bead.glitch.me/index.html" target="_blank"> 
            <div className="home-projects">
                <div className="home-project-img" style={divStyle4}>
                </div>
                <div className="home-project-description">
                    <h1>📷 Photography Portfolio</h1>
                    <p>My personal website for photography commissions, created using HTML/CSS and JavaScript</p>
                    <div className="home-tags">
                        <div className="home-tag">Frontend Development</div>
                        <div className="home-tag">Web Development</div>
                        <div className="home-tag">UI/UX Design</div>
                        <div className="home-tag">Photography</div>
                        <div className="home-tag">JavaScript</div>
                        <div className="home-tag">HTML/CSS</div>
                    </div>
                </div>
            </div>
            </a>
            <a href="https://cxnstellations.itch.io/kikis-delivery-service-game" target="_blank"> 
            <div className="home-projects">
                <div className="home-project-img" style={divStyle5}>
                </div>
                <div className="home-project-description">
                    <h1>🧹 Kiki's Delivery Service Game</h1>
                    <p>An endless runner game inspired by Miyazaki's 1989 film "Kiki's Delivery Service" made in Unity</p>
                    <div className="home-tags">
                        <div className="home-tag">Game Development</div>
                        <div className="home-tag">Game Design & Art</div>
                        <div className="home-tag">Unity</div>
                        <div className="home-tag">C#</div>
                    </div>
                </div>
            </div>
            </a>
        </>
    );
}

export default Works;