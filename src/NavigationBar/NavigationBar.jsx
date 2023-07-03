import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { SideNav, Nav } from "react-sidenav";


const NavigationBar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${isSticky ? 'sticky top-0' : 'relative'} bg-black border-[#FFD700] border text-white font-semibold text-xl p-8 flex gap-5 z-50 justify-center items-center`}>
            <Link to="home" className="link no-underline border-b-[1px] border-transparent hover:border-white transition-all ease-in-out duration-200" smooth={true} offset={-100} duration={500}>Home</Link>
            <Link to="about" className="link no-underline border-b-[1px] border-transparent hover:border-white transition-all ease-in-out duration-200" smooth={true} offset={-100} duration={500}>About Me</Link>
            <Link to="skills" className="link no-underline border-b-[1px] border-transparent hover:border-white transition-all ease-in-out duration-200" smooth={true} offset={-100} duration={500}>Skills</Link>
            <Link to="projects" className="link no-underline border-b-[1px] border-transparent hover:border-white transition-all ease-in-out duration-200" smooth={true} offset={-100} duration={500}>Projects</Link>
            <Link to="contact" className="link no-underline border-b-[1px] border-transparent hover:border-white transition-all ease-in-out duration-200" smooth={true} offset={-100} duration={500}>Contact Me</Link>
        </div>
    );
};

export default NavigationBar;