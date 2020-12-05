import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import SocialIcons from "./SocialIcons";

export default function Contact() {

    const context = useContext(ThemeContext);
    const theme = context.theme;
    // const Mailto = require('react-mailto');

    return (
        <section style={theme}>
            <h1 style={h1Contact}>Contact</h1>
            <h2 style={h2Margin}>Feel free to drop me a line at
                <br/>
                <span style={{color: "#B3A577", fontFamily: 'Ubuntu, sans-serif',}}>
                        <a href="mailto:developerdunlap@gmail.com" target="_blank" rel="noreferrer">developerdunlap@gmail.com</a>
                </span>
                .</h2>
            <SocialIcons/>
        </section>
    )
}

// const bodyStyle = {
//     backgroundColor: "#181818",
//     color: "#fefefe",
//     WebkitBoxAlign: "center",
//     WebkitBoxPack: "center",
//     fontSize: "2.5rem",
//     fontFamily: 'Ubuntu, sans-serif',
//     textAlign: "center",
// }

const h1Contact = {
    fontSize: "3.5rem",
    fontFamily: 'Ubuntu, sans-serif',
    marginBottom: "2rem",
}

const h2Margin = {
    marginLeft: "2rem",
    marginRight: "2rem",
    marginBottom: "10rem",
}
