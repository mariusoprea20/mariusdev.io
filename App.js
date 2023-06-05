import Intro from './Components/Intro.js';
import AboutMe from './Components/AboutMe.js';
import Project from './Components/Project.js';
import Contact from './Components/Contact.js';
import Menu from './Components/Menu.js';
function App() {

  return (
    <div className="App">
      {/**define divs with ids for smoot scrolling purposes*/}
      <Menu/> 
      <div id="intro"><Intro /></div>
      <div id="aboutme"><AboutMe /></div>
      <div id="project"><Project /></div>
      <div id="contact"><Contact /></div>
      {/**define footer */}
      <footer>
        <p style={{ margin: "0%", padding: "0%", color:"#848383", textAlign:"center", backgroundColor:"black" }}>
          Copyright &copy; 2023. All rights are reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
