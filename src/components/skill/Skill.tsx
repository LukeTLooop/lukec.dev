
const Skill = ({ image, title, link }: SkillProps) => {
    return (
        <div className="flex flex-col items-center mx-5">
            <a href={link} target="_blank">
                <img 
                    src={image} 
                    alt={`${title} Logo`} 
                    className="w-12 h-auto rounded-lg md:w-20 lg:w-20 xl:w-24 hover:transition-transform hover:scale-110 hover:cursor-pointer"
                />
            </a>
            <p className="text-center text-sm text-white mt-3 md:text-lg">{title}</p>
        </div>
    );
};

export default Skill;
