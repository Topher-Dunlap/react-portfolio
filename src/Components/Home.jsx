import React from 'react';
import Parallax from "react-rellax";
import DeskAnimation from "./DeskAnimation";
import HomeTextEffect from "./HomeTextEffect";
import SocialIcons from "./SocialIcons";

export default function Home() {

    return (
        <div>
            <div style={posRel}>
                <section style={h1Home}>
                    <HomeTextEffect/>
                </section>
                <h2 style={h2Home}>I create art, Websites and Web Apps</h2>
                <Parallax speed={0}>
                    <DeskAnimation/>
                </Parallax>
            </div>
            <SocialIcons/>
        </div>
    )
}

const h1Home = {
    WebkitBoxAlign: "center",
    WebkitBoxPack: "center",
    display: "-webkit-box",
    fontSize: "3.5rem",
    fontFamily: 'Ubuntu, sans-serif',
    color: "white",
}

const h2Home = {
    textAlign: "center",
    fontFamily: 'Roboto, sans-serif',
    fontWeight: "300",
    fontSize: "2rem",
    color: "#B3A577",
    zIndex: "9",
    left: "100px",
    right: "100px",
    position: "absolute",
    display: "block",
}

const posRel = {
    position: "relative",
}
