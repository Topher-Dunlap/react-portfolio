import React from 'react';
import Parallax from "react-rellax";
import topherPic from '../images/topherPortfolioCropped.JPG';
import CardMedia from "@material-ui/core/CardMedia";

export default function InterestsContainer1() {
    return (
        <section style={alignCenterAndColor}>
            <Parallax speed={10}>
                <Parallax speed={2}>
                <CardMedia
                    image={topherPic}
                    component="img"
                    title="background"
                    style={imgRound}
                />
                </Parallax>
                <h2 style={h2Interest}>
                    Hi, I'm <span style={{color: "#B3A577"}}>Topher</span>. Nice to meet you.
                    I currently live in <span style={{color: "#B3A577"}}>Minneapolis</span>,
                    MN and work as a <span style={{color: "#B3A577"}}>full stack</span> web developer.
                    I use a variety of tools, languages and frameworks like <span
                    style={{color: "#B3A577"}}>React </span>
                    and <span style={{color: "#B3A577"}}>Node.js</span>.
                    Computers and Programming aren't
                    my only interests! I also love playing <span style={{color: "#B3A577"}}>jazz music</span>. I'm a
                    saxophone player and
                    I also enjoy <span style={{color: "#B3A577"}}>teaching</span> and <span
                    style={{color: "#B3A577"}}>dancing </span>
                    Brazilian Zouk. There are so
                    many similarities and crossovers between music, dance and coding! With any
                    project I will bring a unique set of problems solving skills, <span
                    style={{color: "#B3A577"}}>creativity </span>
                    and empathy into creating your product.
                </h2>
            </Parallax>
        </section>
    )
}

const alignCenterAndColor = {
    textAlign: "center",
    backgroundColor: "#181818"
}

const h2Interest = {
    fontFamily: 'Ubuntu, sans-serif',
    color: "white",
    fontSize: "2rem",
    padding: "2rem 5rem",
    marginTop: "6rem",
}

const imgRound = {
    display: "inline-block",
    marginTop: "6rem",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50%",
    width: "40%",
}
