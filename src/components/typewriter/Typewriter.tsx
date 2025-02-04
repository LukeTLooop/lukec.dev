
import { useState, useEffect } from "react";

// text -> words
// words: "overwrite || new line"
// newLinePhrase: "default \n, any will be applicable though"
// Cursor needs to be converted into an object which can be passed into each
// typewriter instance so it can be carried along multiple strings
const useTypewriter = ({
    words,
    multipleWordsBehavior = "newLine",
    speed = 50,
    eraseSpeed = 50,
    delayBetweenWords = 1000,
    newLinePhrase = "\\n"
}: TypewriterProps) => {
    const [textIndex, setTextIndex] = useState<number>(0);
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [currentText, setCurrentText] = useState<string>("");
    const [completedWords, setCompletedWords] = useState<typeof words>([]);
    const [isErasing, setIsErasing] = useState<boolean>(false);
    const [isTypingNewLine, setIsTypingNewLine] = useState<boolean>(false);

    useEffect(() => {
        if (!words || words.length === 0) return;

        const currentWord = words[wordIndex]?.text || "";
        let intervalId: number;

        if (isTypingNewLine) {
            // Handle typing new line phrase
            intervalId = setInterval(() => {
                if (textIndex < newLinePhrase.length) {
                    setCurrentText(prev => prev + newLinePhrase.charAt(textIndex));
                    setTextIndex(prev => prev + 1);
                } else {
                    // finished typing, cleanup
                    clearInterval(intervalId);
                    setIsTypingNewLine(false);

                    // remove phrase and actually drop to next line
                    setCurrentText("");
                    
                    setTextIndex(0);
                    setWordIndex(prev => prev + 1);

                    const finalText = currentText.slice(0, currentText.length - newLinePhrase.length);
                    setCompletedWords(prev => [...prev, { ...words[wordIndex], text: finalText }]);
                }
            }, speed * 2);
        } else if (!isErasing) {
            // Typing the word
            intervalId = setInterval(() => {
                if (textIndex < currentWord.length) {
                    setCurrentText(prev => prev + currentWord.charAt(textIndex));
                    setTextIndex(prev => prev + 1);
                } else {
                    clearInterval(intervalId);

                    setTimeout(() => {
                        if (multipleWordsBehavior === "newLine") {
                            if (!words[wordIndex + 1]) return;

                            setTextIndex(0);
                            setIsTypingNewLine(true);
                        } else {
                            setIsErasing(true);
                        }
                    }, delayBetweenWords);
                }
            }, speed);
        } else {
            // erasing word
            intervalId = setInterval(() => {
                if (textIndex > 0) {
                    setCurrentText(prev => prev.slice(0, -1));
                    setTextIndex(prev => prev - 1);
                } else {
                    clearInterval(intervalId);
                    setIsErasing(false);
                    setWordIndex(prev => prev + 1);
                }
            }, eraseSpeed);
        }

        return () => clearInterval(intervalId);
    }, [
        words,
        wordIndex,
        textIndex,
        isErasing,
        isTypingNewLine,
        speed,
        eraseSpeed,
        delayBetweenWords,
        newLinePhrase,
        multipleWordsBehavior,
        currentText,
    ]);

    return { currentText, completedWords };
};

const Typewriter: React.FC<TypewriterProps> = ({
    words,
    multipleWordsBehavior,
    speed,
    eraseSpeed,
    delayBetweenWords,
    newLinePhrase,
    cursor
}) => {
    const { currentText, completedWords } = useTypewriter({
        words,
        multipleWordsBehavior,
        speed,
        eraseSpeed,
        delayBetweenWords,
        newLinePhrase
    });

    return (
        <>
            {completedWords.map((word, index) => {
                const Tag = word.tag;
                return (
                    <Tag key={index} className={word.classNames}>
                        {word.text}
                    </Tag>
                );
            })}

            {words.length > 0 && (() => {
                const CurrentTag = words[completedWords.length]?.tag;
                const classNames = words[completedWords.length]?.classNames;
                if (!CurrentTag) return; 

                return (
                    <CurrentTag className={classNames}>
                        {currentText}
                        {cursor && cursor}
                    </CurrentTag>
                );
            })()}
        </>
    );
}

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

export { Typewriter, useTypewriter, Cursor };
