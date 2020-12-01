import React from 'react';
import Interests from './Interests';
import Skills from './Skills'
import SocialIcons from "./SocialIcons";

export default function About() {

    return (
        <div style={about}>
            <Interests />
            <Skills />
            <SocialIcons/>
        </div>
    )
}

const about = {
    textAlign: "center",
    backgroundColor: "#181818",
    fontFamily: "sans-serif",
    fontSize: "1.5rem",
    marginBottom: "3rem",
}