
/* Component Types */

interface TypewriterProps {
    words: [ string ],
    multipleWordsBehavior?: [ string ],
    speed?: number,
    newLinePhrase?: string,
    cursor?: Cursor,
}

interface CursorProps {
    blink?: boolean,
    blinkSpeed?: number
}

interface Cursor {
    
}
