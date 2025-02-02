
import SkillsGrid from "../../components/skills-grid/SkillsGrid";

const assets = "src/assets";
const images = {
    profile: `${assets}/profile.jpg`
};

const About = () => {
    return (
        <div className="h-screen">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </section>
                {/* Skills section */}
                <section className="basis-3/4 ml-10 border-green-500 border-2 rounded-3xl bg-black/40">
                    {/* Skill grid */}
                    <SkillsGrid />
                    <h3 className="text-center text-3xl text-green-500 mb-2 mt-8 pb-2">Skills</h3>
                </section>
            </div>
        </div>
    );
};

export default About;
