import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Layout = () => {
    return (
        <div>
            <div id="home"></div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <AboutMe></AboutMe>
            <Education></Education>
            <div id="skills"></div>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Layout;