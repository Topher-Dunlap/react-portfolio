import React from 'react';
import Parallax from "react-rellax";
import DeskAnimation from "./DeskAnimation";
import HomeTextEffect from "./HomeTextEffect";
import SocialIcons from "./SocialIcons";

export default function Home() {

    return (
        <div>
            <div style={homeDiv}>
                <section style={h1Home}>
                    <HomeTextEffect/>
                </section>
                <section style={deskAnimation}>
                    <h2 style={h2Home}>I create art, Websites and Web Apps</h2>
                    <Parallax speed={0}>
                        <DeskAnimation/>
                    </Parallax>
                </section>
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
    display: "block",
}

const deskAnimation = {
    display: "block",
}

const homeDiv = {
    position: "relative",
}
