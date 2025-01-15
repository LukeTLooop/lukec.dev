
import { useState, useEffect, useMemo } from "react";

// text -> words
// words: "overwrite || new line"
// newLinePhrase: "default \n, any will be applicable though"
// Cursor needs to be converted into an object which can be passed into each
// typewriter instance so it can be carried along multiple strings

// TODO: Modify speed variable so the value provided matches number of ms delay between each letter
const useTypewriter = (text: string, speed: number = 50): string => {
    const [index, setIndex] = useState<number>(0);
    const displayText = useMemo(() => text.slice(0, index), [index, text]);

    useEffect(() => {
        if (index >= text.length)
            return;

        const timeoutId = setTimeout(() => {
            setIndex(i => i + 1);
        }, speed);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [index, text, speed]);

    return displayText;
};

const newUseTypewriter = ({
    words,
    multipleWordsBehavior = "newLine",
    speed = 50,
    newLinePhrase = "\\n"
}: TypewriterProps): string => {
    const [textIndex, setTextIndex] = useState<number>(0);
    const displayText = useMemo(() => words.forEach((word) => word.slice(0, index)), [words]);

    return displayText;
};

const Cursor = ({ blink = true, blinkSpeed = 600 }: CursorProps): React.ReactElement => {
    const [blinking, setBlinking] = useState<boolean>(blink);
    const [blinkingSpeed, setBlinkingSpeed] = useState<number>(blinkSpeed);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const cursor: string = "_";

    useEffect(() => {
        if (!blinking)
            return;

        const intervalId = setInterval(() => {
            setIsVisible((visible) => !visible)
        }, blinkingSpeed);

        return () => {
            clearInterval(intervalId);
        };
    }, [blinking, blinkingSpeed]);

    return (
        <span
            style={{
                visibility: isVisible ? "visible" : "hidden",
                userSelect: "none"
            }}
        >
            {cursor}
        </span>
    );
};

export { useTypewriter, Cursor };
