
const SectionTitle = ({ title }) => {
    return (
        <div className="border-t-2 border-b-2 my-10 p-5 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-t from-[#0088ffc6] to-[#00ffd0]">
            <p className="text-3xl font-semibold text-center">{title}</p>
        </div>
    );
};

export default SectionTitle;