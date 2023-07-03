import { TypeAnimation } from "react-type-animation";

const Header = () => {



    return (
        <div className={`flex flex-col justify-center text-center font-bold items-center h-[100vh] bg-cover header`}>
            <p className="text-xl md:text-2xl">Hello!</p>
            <p className="text-3xl md:text-5xl">I am <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#0088ffc6] to-[#00ffd0]">A.H.M. Moin Uddin Sami</span></p>
            <TypeAnimation
                className="text-xl md:text-3xl"
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
                speed={60}
                style={{ display: 'inline-block', borderBottom: '3px solid #0088ffc6' }}
                repeat={Infinity}
            />
        </div>
    );
};

export default Header;