import React from 'react';
import SocialIcons from "./SocialIcons";
import ProjectCardGrid from "./ProjectCardGrid";

export default function Projects() {

    return (
        <section style={bodyStyle}>
            <div>
                <h1 style={bottomMargin}>Projects</h1>
                <ProjectCardGrid/>
                <SocialIcons/>
            </div>
        </section>
    )
}

const bodyStyle = {
    backgroundColor: "#181818",
    color: "#fefefe",
    WebkitBoxAlign: "center",
    WebkitBoxPack: "center",
    fontSize: "3.5rem",
    fontFamily: 'Ubuntu, sans-serif',
    position: "relative",
    textAlign: "center",
}

const bottomMargin = {
    marginBottom: "2rem",
}
