import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Layout = () => {
    return (
        <div className="">
            <div id="home"></div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <AboutMe></AboutMe>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>   
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Layout;