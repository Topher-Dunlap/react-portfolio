import React, { useState, useEffect } from 'react';
import ReactTextTransition, { presets } from "react-text-transition";

const texts = ["Web Developer.", "Artist.", "Thinker."];

export default function HomeTextEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
    const larryTimer = setInterval(() => {
            setCount(count + 1);
        }, 3000);
        return () => clearInterval(larryTimer)
    }, [count]);

    return (
        <ReactTextTransition
            text={texts[count % texts.length]}
            spring={presets.gentle}
            style={textStyle}
        />
    );
}

const textStyle = {
    textAlign: "center",
    fontSize: "3.5rem",
    // left: "50%",
    // transform: "translateX(-50%)",
    fontFamily: 'Ubuntu, sans-serif',
    color: "white",
    zIndex: "2",
    position: "relative",
}