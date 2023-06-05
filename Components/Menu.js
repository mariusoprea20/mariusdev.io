import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll"; //import link from react-scroll package
import "./CSS/menu.css";

function Menu() {
    return (
        <div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                zIndex: "999" //z-index: 999 property ensures that the div is always in front of other elements on the screen
            }}>
                {/**Use Link to allow smooth scrolling */}
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link
                            className="intro-nav-link"
                            activeClass="active"
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}>
                            Marius Dev
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="aboutme"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}>
                                About Me
                            </Link>

                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="project"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}>
                                Projects
                            </Link>

                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}>
                                Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Menu;
