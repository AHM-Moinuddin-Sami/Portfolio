import SectionTitle from "../SectionTitle/SectionTitle";
import "./Projects.css";

const Projects = () => {
    return (
        <div id="projects">
            <SectionTitle title={"My Projects"}></SectionTitle>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 w-10/12 mx-auto justify-between">
                <div className="project overflow-hidden mb-10 h-[300px] bg-[#000] ease-in-out duration-[5s] bg-cover bg-top hover:bg-bottom " style={{ backgroundImage: `url("/wayofthedragon.png")` }}>
                    <div className="bar bg-black border-[#FFD700] border-2 p-2 text-[#FFD700] flex justify-evenly">
                        <button>Project Details</button>
                        <a href="https://playtopia-client-d1357.web.app" rel="noreferrer noopener" target="_blank" >Live Link</a>
                    </div>
                </div>
                <div className="project mb-10 overflow-hidden h-[300px] bg-[#000] ease-in-out duration-[5s] bg-cover bg-top hover:bg-bottom " style={{ backgroundImage: `url("/playtopia.png")` }}>
                    <div className="bar bg-black border-[#FFD700] border-2 p-2 text-[#FFD700] flex justify-evenly">
                        <button>Project Details</button>
                        <a href="https://playtopia-client-d1357.web.app" rel="noreferrer noopener" target="_blank" >Live Link</a>
                    </div>
                </div>
                <div className="project overflow-hidden mb-10 h-[300px] bg-[#000] ease-in-out duration-[5s] bg-cover bg-top hover:bg-bottom " style={{ backgroundImage: `url("/exquisitecuisine.png")` }}>
                    <div className="bar bg-black border-[#FFD700] border-2 p-2 text-[#FFD700] flex justify-evenly">
                        <button>Project Details</button>
                        <a href="https://playtopia-client-d1357.web.app" rel="noreferrer noopener" target="_blank" >Live Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;