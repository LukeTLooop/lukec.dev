
import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "../styles/AnimatedText.css"

function Header() {
    const [cursorBlink, setCursorBlink] = useState<boolean>(false);
    const [typeEffect] = useTypewriter({
        words: ["Luke Christopherson", "test", "i like pineapples", "actually, i like kiwis more tbh"],
        typeSpeed: 75,
        deleteSpeed: 40,
        onLoopDone: () => {
            setCursorBlink(true);
        },
        onDelay: () => {
            setCursorBlink(true);
        },
        onDelete: () => {
            setCursorBlink(false);
        }
    });

    return (
        <h1 className="text-center w-3/4 text-3xl text-green-500 animated-text">
            {typeEffect}
            <Cursor cursorBlinking={cursorBlink} cursorStyle="_" cursorColor="inherit" />
        </h1>
    );
}

export default Header;
