
/* Component Types */

interface TypewriterProps {
    words: {
        text: string,
        tag: keyof JSX.IntrinsicElements,
        classNames: string,
    }[],
    multipleWordsBehavior?: "newLine" | "replace",
    speed?: number,
    newLinePhrase?: string,
    eraseSpeed?: number,
    delayBetweenWords?: number,
    cursor?: JSX.Element,
}

interface CursorProps {
    blink?: boolean,
    blinkSpeed?: number
}

interface Cursor {
    
}
