
import { useState, useEffect, useRef } from "react";

const AnimatedText = () => {
    const [currentText, setCurrentText] = useState<string>("");
    const text = "Luke Christopherson";

    const iRef = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (iRef.current < text.length) {
                setCurrentText(prev => prev + text.charAt(iRef.current));
                iRef.current++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return <h1 className="text-center text-3xl text-green-500 animated-text">{currentText}</h1>;
};

export default AnimatedText;
