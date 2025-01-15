
import { useTypewriter, Cursor } from "./Typewriter";

import "../styles/AnimatedText.css"

function Header() {
    const nameText = useTypewriter(
        "Luke Christopherson",
        80,
    );
    const professionText = useTypewriter(
        "Full Stack Developer",
        150,
    )

    return (
        <header className="flex flex-col justify-center text-left w-3/4 h-screen">
            <h1 className="w-full text-6xl text-green-500 mb-4">
                {nameText}
                <Cursor />
            </h1>
            <p className="w-full text-3xl text-green-700 mt-4">
                {professionText}
                <Cursor />
            </p>
        </header>
    );
}

export default Header;
