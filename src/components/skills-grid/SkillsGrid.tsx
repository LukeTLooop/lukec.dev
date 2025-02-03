
import Skill from "../skill/Skill";

const assets = "src/assets";
const skills = [
    {
        image: `${assets}/html5.png`,
        title: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    },
    {
        image: `${assets}/css3.svg`,
        title: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        image: `${assets}/javascript.svg`,
        title: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        image: `${assets}/typescript.png`,
        title: "TypeScript",
        link: "https://www.typescriptlang.org/",
    },
    {
        image: `${assets}/react.svg`,
        title: "React",
        link: "https://react.dev/",
    },
    {
        image: `${assets}/redux.svg`,
        title: "Redux",
        link: "https://redux.js.org/",
    },
    {
        image: `${assets}/express.svg`,
        title: "Express.js",
        link: "https://expressjs.com/",
    },
    {
        image: `${assets}/postgresql.svg`,
        title: "PostgreSQL",
        link: "https://www.postgresql.org/",
    },
];

const SkillsGrid = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 mb-5">
            {skills.map((skill, index) => (
                <Skill key={index} image={skill.image} title={skill.title} link={skill.link} />
            ))}
        </div>
    );
};

export default SkillsGrid;
