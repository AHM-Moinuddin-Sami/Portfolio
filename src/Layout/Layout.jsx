import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import Projects from "../Projects/Projects";

const Layout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Projects></Projects>
        </div>
    );
};

export default Layout;