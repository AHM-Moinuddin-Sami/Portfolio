import { useEffect, useState } from "react";
import { Link } from "react-scroll";


const NavigationBar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
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
        <div className={`${isSticky ? 'sticky top-0 bg-red-300' : 'relative bg-blue-300'} p-8 flex justify-between`}>
            <div>KEK</div>
            <div>
                <Link to="home" smooth={true} duration={500}>Home</Link>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
    );
};

export default NavigationBar;