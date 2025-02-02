
import Skill from "../skill/Skill";

const assets = "src/assets";
const skills = [
    {
        image: `${assets}/html5.png`,
        title: "HTML",
    },
    {
        image: `${assets}/javascript.svg`,
        title: "JavaScript",
    },
    {
        image: `${assets}/css3.svg`,
        title: "CSS",
    },
    {
        image: `${assets}/react.svg`,
        title: "React",
    },
    {
        image: `${assets}/redux.svg`,
        title: "Redux",
    },
    {
        image: `${assets}/express.svg`,
        title: "Express.js",
    },
    {
        image: `${assets}/postgresql.svg`,
        title: "PostgreSQL",
    },
];

const SkillsGrid = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-y-5 mt-5">
            {skills.map((skill) => (
                <Skill image={skill.image} title={skill.title} />
            ))}
        </div>
    );
};

export default SkillsGrid;
