import { TypeAnimation } from "react-type-animation";

const Header = () => {

    

    return (
        <div id="home" className={`flex flex-col justify-center items-center h-[100vh]`}>
            <p>Hello!</p>
            <p>I am A.H.M. Moin Uddin Sami</p>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'a Full Stack Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'a Front End Developer',
                    1000,
                    'a MERN Stack Developer',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
            <a href="" download={"/Resume.pdf"}>Download Resume</a>
        </div>
    );
};

export default Header;