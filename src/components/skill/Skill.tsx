
const Skill = ({ image, title }: SkillProps) => {
    return (
        <div className="w-full m-auto xl:w-1/2">
            <img src={image} alt={`${title} Logo`} className="w-12 h-auto m-auto rounded-lg md:w-16 lg:w-20 xl:w-28" />
            <p className="text-center text-lg text-white mx-auto mt-3">{title}</p>
        </div>
    );
};

export default Skill;
