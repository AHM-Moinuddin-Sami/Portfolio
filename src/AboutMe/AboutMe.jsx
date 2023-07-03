import { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from "../Education/Education";

const AboutMe = () => {

    useEffect(() => {
        AOS.init({
            // Customize AOS options here (optional)
        });
    }, [])

    return (
        <div id="about" className="bg-gray-800 py-10">
            <SectionTitle title={"About Me"}></SectionTitle>
            <div data-aos="zoom-in" className="grid grid-cols-1 md:flex gap-5 justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src="/SamiCropped.png" className="h-48 w-36 rounded-full" />
                    <div className="flex gap-1">
                        <a href="https://github.com/AHM-Moinuddin-Sami"><img className="h-12 w-12" src="/github.png" alt="" /></a>
                        <a href="https://www.linkedin.com/in/a-h-m-moin-uddin-sami-164b3b252/"><img className="h-12 w-12" src="/linkedin.png" alt="" /></a>
                        <a href="https://www.facebook.com/moinuddin.sami.12/"><img className="h-12 w-12" src="/facebook.png" alt="" /></a>
                    </div>
                </div>
                <div className="text-white text-lg text-center md:text-start">
                    <p>Name: A.H.M. Moin Uddin Sami</p>
                    <p>Email: moinuddinsami1205@gmail.com</p>
                    <p>Date of Birth: 12th May, 2003</p>
                    <p>Nationality: Bangladeshi</p>
                    <p>Address: 187/2, South Pirerbag, Dhaka - 1216, Bangladesh</p>
                    <p>Contact No: +8801710245720</p>
                    <a href="/Resume.pdf" className="border w-fit mt-5 md:block hidden  rounded-full bg-gradient-to-tl hover:bg-gradient-to-br from-[#0088ffc6] to-[#00ffd0] px-5 py-2 hover:text-black transition-all duration-200 ease-in-out" download>Download Resume</a>
                </div>
            </div>
            <Education></Education>
        </div>
    );
};

export default AboutMe;