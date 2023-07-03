import { useEffect, useState } from "react";
import { Link } from "react-scroll";


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
        <div className={`${isSticky ? 'p-2 top-0 sticky bg-black' : 'p-10 relative bg-transparent'} flex  w-full border-[#FFD700] border-b text-white font-semibold text-xl gap-5 z-50 justify-center items-center transition-all duration-500 ease-in-out`}>
            <Link to="home" className=" cursor-pointer md:block hidden no-underline border-b-[1px] border-transparent hover:border-white transition-all ease-in-out duration-200" smooth={true} offset={-100} duration={500}>Home</Link>
            <Link to="about" className="cursor-pointer md:block hidden  no-underline border-b-[1px] border-transparent hover:border-white transition-all ease-in-out duration-200" smooth={true} offset={-100} duration={500}>About Me</Link>
            <Link to="skills" className="cursor-pointer md:block hidden  no-underline border-b-[1px] border-transparent hover:border-white transition-all ease-in-out duration-200" smooth={true} offset={-100} duration={500}>Skills</Link>
            <Link to="projects" className="cursor-pointer md:block hidden  no-underline border-b-[1px] border-transparent hover:border-white transition-all ease-in-out duration-200" smooth={true} offset={-100} duration={500}>Projects</Link>
            <Link to="contact" className="cursor-pointer md:block hidden  no-underline border-b-[1px] border-transparent hover:border-white transition-all ease-in-out duration-200" smooth={true} offset={-100} duration={500}>Contact Me</Link>
            <a href="/Resume.pdf" className="border md:block hidden  rounded-full border-[#FFD700] px-5 py-2 hover:bg-white hover:text-black transition-all duration-200 ease-in-out" download>Download Resume</a>
            <button className="md:hidden block"></button>
        </div>
    );
};

export default NavigationBar;