import MyMarker from "./MyMarker";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Image from 'react-bootstrap/Image'
import Northumbria from "./newcastle/northumbria.jpg";
import "./CSS/intro.css";
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHub from "./images/github.png";
import LinkedIn from "./images/linkedin.png";
import Instagram from "./images/instagram.png";

function Intro() {

    //set the img limit
    const limit = 5;
    //set a counter state
    const [counter, setCounter] = useState(0);
    //set the flag of the spinner
    const [flag, setFlag] = useState(true);
    //define a counter function
    const handleCounter = () => {
        setCounter(counter + 1);
    }
    //on load counter
    useEffect(() => {
        if (counter => limit) {
            setFlag(false);
        }
    }, [counter])

    const handleLinkedin = () => {
        // Open Google Maps with the specified location in a new browser tab
        window.open("https://www.linkedin.com/in/marius-oprea-a971a8141/");
    }

    const handleGithub = () => {
        // Open Google Maps with the specified location in a new browser tab
        window.open("https://github.com/mariusoprea20");
    }

    const handleInstagram = () => {
        // Open Google Maps with the specified location in a new browser tab
        window.open("https://www.instagram.com/techkid_marius/");
    }

    return (
        <div className="Intro">
            <h1 className="pageTitle">
                {/**Create a automatic type writer */}
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        strings: ["Greetings, Techno-Wizard!", "Happy to see you,"]
                    }}
                />
            </h1>
            {/**Introduction, including my marker*/}
            <div className="introDesc">
                <h2 style={{ color: "#00ffffff" }}>Web Developer</h2>
                <span>I'm Marius, a recent graduate based in Newcastle Upon Tyne<MyMarker />.
                    As a dedicated and passionate individual, I've developed a diverse
                    set of skills throughout my academic journey. Now, I am eager to apply
                    this knowledge in the real world. Explore my portfolio to get a glimpse of my
                    work and potential.</span>
                {/**Social Media Icons */}
                <div className="mediaIcons">
                    <img src={GitHub} alt="github icon" onClick={handleGithub}/>
                    <img src={LinkedIn} alt="linkeding icon" onClick={handleLinkedin}/>
                    <img src={Instagram} alt="linkeding icon" onClick={handleInstagram}/>
                </div>
            </div>

            {/**add image with spinner when loading the web page */}
            {flag ? (

                <h4 className="d-flex justify-content-center" style={{ marginTop: '20%' }}>
                    <Spinner animation="border" role="status"></Spinner>
                </h4>) :
                (
                    <div className="northumbriaImg">
                        <Image src={Northumbria} alt="Northumbria Intake Education" loading="lazy" onLoad={handleCounter} />
                    </div>
                )}

        </div>
    );
}

export default Intro;