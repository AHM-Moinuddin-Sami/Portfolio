import ProgressBar from "@ramonak/react-progress-bar";
import SectionTitle from "../SectionTitle/SectionTitle";
import { InView, useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";


const Skills = () => {
    const { ref, inView, entry } = useInView({ threshold: 0 });

    const skills = [
        {
            name: "ReactJS",
            completion: "80",
            icon: "/React.png"
        },
        {
            name: "ExpressJS",
            completion: "70",
            icon: "/Expressjs.png"
        },
        {
            name: "NodeJS",
            completion: "60",
            icon: "/nodejs.png"
        },
        {
            name: "MongoDB",
            completion: "70",
            icon: "/mongodb.png"
        },
        {
            name: "HTML5",
            completion: "80",
            icon: "/html.png"
        },
        {
            name: "CSS3",
            completion: "60",
            icon: "/css.png"
        },
        {
            name: "Java Script",
            completion: "70",
            icon: "/javascript.png"
        },
        {
            name: "NextJS",
            completion: "40",
            icon: "/nextjs.png"
        },
        {
            name: "TailwindCSS",
            completion: "90",
            icon: "/tailwindcss.png"
        },
        {
            name: "Bootstrap",
            completion: "70",
            icon: "/bootstrap.png"
        },
        {
            name: "Material UI",
            completion: "40",
            icon: "/materialui.png"
        },
        {
            name: "Firebase",
            completion: "70",
            icon: "/firebase.png"
        },
        {
            name: "C",
            completion: "80",
            icon: "/c.png"
        },
        {
            name: "Java",
            completion: "60",
            icon: "/java.png"
        },
        {
            name: "Github and Gitbash",
            completion: "60",
            icon: "/github.png"
        },

    ];

    const tools = [
        {
            name: "Visual Studio Code",
            icon: "/vsc.webp"
        },
        {
            name: "Netlify",
            icon: "/netlify.webp"
        },
        {
            name: "Vercel",
            icon: "/vercel.png"
        },
        {
            name: "JWT",
            icon: "/jwt.png"
        },
        {
            name: "Axios",
            icon: "/axios.png"
        },
        {
            name: "Eclipse",
            icon: "/eclipse.png"
        },
        {
            name: "CodeBlocks",
            icon: "/codeblocks.png"
        },
        {
            name: "Canva",
            icon: "/canva.png"
        },
        {
            name: "Figma",
            icon: "/figma.png"
        },
    ]

    return (
        <div id="skills" className="bg-gray-600 py-10">
            <SectionTitle title={"My Skills"}></SectionTitle>

            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
                {
                    skills.map((skill, i) =>
                        <div key={i} ref={ref} className="flex w-full items-center justify-center gap-2 hover:scale-125 transition-all duration-200 hover:z-20">
                            <img className="h-auto w-32" src={skill.icon} alt="" />
                            <div className="grow">
                                <p className="text-xl text-transparent bg-clip-text bg-gradient-to-b from-[#0088ffc6] to-[#00ffd0]">{skill.name}</p>
                                <InView className="">
                                    {({ inView, ref }) => {
                                        const percentage = inView ? skill.completion : 0;
                                        return <div ref={ref}>
                                            <ProgressBar completed={percentage} customLabel={`${percentage}%`} bgColor={`#00ffd0`}></ProgressBar>
                                        </div>
                                    }}
                                </InView>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="my-5">
                <p className=" text-center text-2xl text-transparent bg-clip-text bg-gradient-to-t from-[#0088ffc6] to-[#00ffd0] my-5">Tools Used</p>
                <Marquee
                    autoFill
                >
                    {
                        tools.map((tool, i) =>
                            <div key={i} className="mr-10">
                                <img className="w-14 h-auto" title={tool.name} src={tool.icon} alt="" />
                            </div>
                        )
                    }
                </Marquee>
            </div>
        </div >
    );
};

export default Skills;