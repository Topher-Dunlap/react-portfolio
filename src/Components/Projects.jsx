import React, {useContext} from 'react';
import SocialIcons from "./SocialIcons";
import ProjectCardGrid from "./ProjectCardGrid";
import ThemeContext from "./ThemeContext";

export default function Projects() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    return (
        <section style={theme}>
            <div>
                <h1 style={bottomMargin}>Projects</h1>
                <ProjectCardGrid/>
                <SocialIcons/>
            </div>
        </section>
    )
}

// const bodyStyle = {
//     backgroundColor: "#181818",
//     color: "#fefefe",
//     WebkitBoxAlign: "center",
//     WebkitBoxPack: "center",
//     fontSize: "3.5rem",
//     fontFamily: 'Ubuntu, sans-serif',
//     position: "relative",
//     textAlign: "center",
// }

const bottomMargin = {
    marginBottom: "2rem",
}
