import React from 'react';
import Parallax from 'react-rellax';
import SkillCardGrid from "./SkillCardGrid";

export default function Skills() {
    return (
        <div style={backgroundColor}>
            <Parallax speed={1.25}>
            </Parallax>
            <Parallax speed={1}>
                <Parallax speed={.75}>
                    <h1 style={h1Style}>
                        Skills
                    </h1>
                </Parallax>
                <SkillCardGrid/>
            </Parallax>
        </div>
    )
}

const h1Style = {
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: "3rem",
    color: "#B3A577",
    textAlign: "center",
    zIndex: "2",
    position: "relative",
}

const backgroundColor = {
    backgroundColor: "#181818",
}
