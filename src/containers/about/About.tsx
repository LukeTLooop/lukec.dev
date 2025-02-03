
import SkillsGrid from "../../components/skills-grid/SkillsGrid";

const assets = "src/assets";
const images = {
    profile: `${assets}/profile.jpg`
};

const About = () => {
    return (
        <div className="mb-32">
            <h2 className="text-center text-4xl text-green-500 mb-2 pt-8">About</h2>
            <hr className="mb-10 border-green-700" />
            <div className="flex flex-row justify-around">
                {/* Image and about statement */}
                <section className="basis-full px-16 mr-10">
                    <img
                        src={images.profile}
                        alt="Image of Luke"
                        className="w-1/2 max-h-fit mx-auto rounded-full border-green-500 border-2"
                    />
                    <p className="mt-8 text-justify w-3/4 mx-auto">
                        I'm a full-stack web developer whose passionate about building unique, scalable, and high-performance web-apps.
                        I began my development journey with Roblox game development, where I developed my skills to write structured and
                        maintainable code for large, complex gameplay systems. Now I specialize in modern web technologies, creating
                        apps which have a focus on security, readability, and a solid architecture. I write structured, intuitive code
                        which can speak for itself without the necessity for excessive commentation. In my free time I like to hike,
                        work out at the gym, and spend time with my friends, family, and cats.
                    </p>
                </section>
                {/* Skills section */}
                <section className="basis-3/4 h-fit ml-10 border-green-500 border-2 rounded-3xl bg-black/40">
                    {/* Skill grid */}
                    <h3 className="text-center text-3xl text-green-500 mt-2 mb-8 pt-2">Skills</h3>
                    <SkillsGrid />
                </section>
            </div>
        </div>
    );
};

export default About;
