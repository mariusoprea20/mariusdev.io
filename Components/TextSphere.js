import React, { useEffect } from "react";
import "./CSS/textsphere.css";
// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {

  //define a anonymous function to initialise the tag cloud
  const initTagCloud = () => {
    //classname
    const container = ".tagcloud";
    //tags to be displayed 
    const texts = [
      "Java",
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Three.js",
      "jQuery",
      "C",
      "PHP",
      "Firebase",
      "MySQL",
      "SQLite",
      "GITHUB",
    ];

    //get the sphere size to have it's radius based on the window size when the web page is loaded
    const sphereSize = ()=>{
      let x;
      if (window.innerWidth <= 394) {
        x=100;
      } else if (window.innerWidth <= 402) {
        x= 120;
      } else if(window.innerWidth <= 600){
        x= 200;
      } else {
        x= 300;
      }
      return x
    }
    //settings of the tag cloud
    let options = {
      radius: sphereSize(),
      maxSpeed: "normal",
      initSpeed: "normal",
      //interaction with the mouse
      keep: true,
    };

    //handle sphere resize based on window resize after the web page is loaded
    const handleResize = () => {
      //get the .tagcloud container
      const containerElement = document.querySelector(container);
  
      if(containerElement) {
        //clear off the containerElement
        containerElement.innerHTML = '';
        //get the resize using if else statements
        if (window.innerWidth <= 394) {
          options.radius = 100;
        } else if (window.innerWidth <= 402) {
          options.radius = 120;
        } else if(window.innerWidth <= 600){
          options.radius = 200;
        } else {
          options.radius = 300;
        }
        //set the TagCloud params
        TagCloud(container, texts, options);
      }
    };

    //add event listener 'handleResize' to trigger on window resize
    //this will work only on resize
    window.addEventListener('resize', handleResize);

    // Initialize TagCloud when page is loaded
    TagCloud(container, texts, options);
    
    //this function will run when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };

  //set and clear timeout
  /**
   * This useEffect hook calls initTagCloud() when the component first mounts. 
   * It wraps initTagCloud() in a setTimeout to ensure that it's placed on the 
   * event loop and will only run after the component has fully rendered. 
   * It also clears the timeout when the component is unmounted.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      initTagCloud();
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []); //empty dependency array ensures the effect runs only once

  return (
    <div>
      <div className="text-shpere">
        {/**display the cloud sphere with a span tag */}
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};

export default TextShpere;
