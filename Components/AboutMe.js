import "./CSS/aboutme.css"
import TextSphere from "./TextSphere.js";
function AboutMe() {

    //Render the aboutme page
    return (
        <div className="AboutMe">
            {/**initialise the text sphere here */}
            <div className="techStack">
                <TextSphere />
            </div>
            <div className="aboutmedetails">
                <h2 style={{color:"#00ffffff"}}>About Me</h2>
                <p>I'm a Computer Science graduate from Northumbria University, 
                    with solid skills in multiple programming languages and a keen 
                    interest in both Web Development and Software Engineering. 
                    Throughout my university years, I've balanced multiple projects, 
                    honing my time management and collaboration abilities. 
                    Eager to apply my technical skills and user-focused mindset to a 
                    professional role, I'm excited for the opportunities ahead. 
                    <br/>
                    <br/>
                    Let's connect and create something great together!
                </p>
            </div>
        </div>
    );
}
export default AboutMe;