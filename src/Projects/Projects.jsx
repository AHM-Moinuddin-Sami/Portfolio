import SectionTitle from "../SectionTitle/SectionTitle";
import "./Projects.css";

const Projects = () => {
    return (
        <div id="projects" className="bg-gray-800 py-10">
            <SectionTitle title={"My Projects"}></SectionTitle>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 w-10/12 mx-auto justify-between">
                <div className="project overflow-hidden mb-10 h-[300px] bg-[#000] ease-in-out duration-[5s] bg-cover bg-top hover:bg-bottom " style={{ backgroundImage: `url("/wayofthedragon.png")` }}>
                    <div className="bar bg-black border-[#0088ffc6] border-b-2 p-2 text-[#0088ffc6] flex justify-evenly">
                        <button onClick={() => window.my_modal_1.showModal()}>Project Details</button>
                        <a href="https://playtopia-client-d1357.web.app" rel="noreferrer noopener" target="_blank" >Live Link</a>
                    </div>
                </div>
                <div className="project mb-10 overflow-hidden h-[300px] bg-[#000] ease-in-out duration-[5s] bg-cover bg-top hover:bg-bottom " style={{ backgroundImage: `url("/playtopia.png")` }}>
                    <div className="bar bg-black border-[#0088ffc6] border-b-2 p-2 text-[#0088ffc6] flex justify-evenly">
                        <button onClick={() => window.my_modal_2.showModal()}>Project Details</button>
                        <a href="https://playtopia-client-d1357.web.app" rel="noreferrer noopener" target="_blank" >Live Link</a>
                    </div>
                </div>
                <div className="project overflow-hidden mb-10 h-[300px] bg-[#000] ease-in-out duration-[5s] bg-cover bg-top hover:bg-bottom " style={{ backgroundImage: `url("/exquisitecuisine.png")` }}>
                    <div className="bar bg-black border-[#0088ffc6] border-b-2 p-2 text-[#0088ffc6] flex justify-evenly">
                        <button onClick={() => window.my_modal_3.showModal()}>Project Details</button>
                        <a href="https://playtopia-client-d1357.web.app" rel="noreferrer noopener" target="_blank" >Live Link</a>
                    </div>
                </div>
                {/* You can open the modal using ID.showModal() method */}
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <p className="text-xl text-center  text-transparent bg-clip-text bg-gradient-to-b from-[#0088ffc6] to-[#00ffd0]">Way of the Dragon [MERN Stack Project]</p>
                        <p>
                            Students can select classes, then enroll in those classes through payment. Uses Stripe for payment.
                            Instructors can add classes, edit their added classes and remove their added classes.
                            Admins can approve and deny Instructors' added classes with feedback and change user roles.
                            Interchangeable Red and Black color scheme with a day/night button for toggle.
                            Popular classes and instructors section sorted by enrolled student count.
                            Loading pages on homepage, dashboard and other pages based on backend data load status.
                            An eLearning website focused on martial arts courses. Interactive, responsive and full of functionalities.
                        </p>
                        <p>Technology : React, React Router, Stripe, TailwindCSS, DaisyUI, React Router, Firebase, Dotenv, JWT, Axios,
                            Tanstack Query, Express.js, Vercel, MongoDB, Anime.js, CSS, HTML5.</p>
                        <div className="flex gap-3 justify-center items-center">
                            <a className="text-blue-500" href="https://way-of-the-dragon.web.app/">Live Link</a>
                            <a className="text-blue-500" href="https://github.com/AHM-Moinuddin-Sami/Way-of-the-Dragon-Client">Github Client</a>
                            <a className="text-blue-500" href="https://github.com/AHM-Moinuddin-Sami/Way-of-the-Dragon-Server">Github Server</a>
                        </div>
                    </form>
                </dialog>
                <dialog id="my_modal_2" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <p className="text-xl text-center  text-transparent bg-clip-text bg-gradient-to-b from-[#0088ffc6] to-[#00ffd0]">Playtopia [MERN Stack Project]</p>
                        <p>An eCommerce website focused on board games and puzzles. Made with customizability in mind, the site can
                            be of any product line. Users can easily manage product data without effort through this website functionalities.

                            Different routes available based on login status, giving access to site functionality instead of view only.
                            Logged in users can add new toys, remove previously added toys, also able to edit added toy details.
                            Responsive and colorful design. Has sorting and search functions implemented through queries.

                        </p>
                        <p>Technology : Firebase, React, React Router, TailwindCSS, DaisyUI, Dotenv, Express.js, Vercel, MongoDB,
                            Node.js.</p>
                        <div className="flex gap-3 justify-center items-center">
                            <a className="text-blue-500" href="https://playtopia-client-d1357.web.app/">Live Link</a>
                            <a className="text-blue-500" href="https://github.com/AHM-Moinuddin-Sami/Playtopia-Client">Github Client</a>
                            <a className="text-blue-500" href="https://github.com/AHM-Moinuddin-Sami/Playtopia-Server">Github Server</a>
                        </div>
                    </form>
                </dialog>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box py-10">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <p className="text-xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0088ffc6] to-[#00ffd0]">Exquisite Cuisine [Full Stack Project]</p>
                        <p>A Japanese chef/recipe website that can be a template for any chef/recipe site design.
                            Different routes available based on login status , differing favorites section based on email and local storage.
                            Bloglike design, responsive homepage and functionalities like detailed chef and recipe view.
                            Easily changeable to any other kind of orientation due to passive design and color scheme.
                        </p>
                        <p>Technology : Firebase, React, React Router, TailwindCSS, Dotenv, DaisyUI, Express.js, Vercel, Node.js.</p>
                        <div className="flex gap-3 justify-center items-center">
                            <a className="text-blue-500" href="https://exquisite-cuisine-client-ca1c8.web.app/">Live Link</a>
                            <a className="text-blue-500" href="https://github.com/AHM-Moinuddin-Sami/Exquisite-Cuisine-Client">Github Client</a>
                            <a className="text-blue-500 " href="https://github.com/AHM-Moinuddin-Sami/Exquisite-Cuisine-Server">Github Server</a>
                        </div>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default Projects;