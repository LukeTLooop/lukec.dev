
import { Typewriter, Cursor } from "./Typewriter";

import "../styles/AnimatedText.css"

function Header() {
    return (
        <header className="flex flex-col justify-center text-left w-3/4 h-screen">
            <Typewriter
                words={[
                    { text: "Luke Christopherson", tag: "h1", classNames: "w-full text-6xl text-green-500 mb-4" },
                    { text: "Full Stack Developer", tag: "p", classNames: "w-full text-3xl text-green-700 mt-4" },
                ]}
                multipleWordsBehavior="newLine"
                speed={50}
                eraseSpeed={150}
                delayBetweenWords={750}
                newLinePhrase="\n"
                cursor={<Cursor />}
            />
        </header>
    );
}

export default Header;
