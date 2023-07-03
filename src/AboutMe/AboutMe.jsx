import SectionTitle from "../SectionTitle/SectionTitle";

const AboutMe = () => {
    return (
        <div id="about">
            <SectionTitle title={"About Me"}></SectionTitle>
            <div className="flex flex-col justify-center items-center">
                <img src="/SamiCropped.png" className="h-40 w-32 rounded-full" />
                <p>Name: A.H.M. Moin Uddin Sami</p>
                <p>Email: moinuddinsami1205@gmail.com</p>
                <p>Date of Birth: 12th May, 2003</p>
                <p>Nationality: Bangladeshi</p>
                <p>Address: 187/2, South Pirerbag, Dhaka - 1216, Bangladesh</p>
                <p>Contact No: +8801710245720</p>
                
            </div>
        </div>
    );
};

export default AboutMe;