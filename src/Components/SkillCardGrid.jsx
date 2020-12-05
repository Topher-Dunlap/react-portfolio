import React from "react";
import {SiJavascript, SiMaterialUi, SiMocha, SiPostman, SiReact, SiVisualstudiocode, SiWebstorm} from "react-icons/si";
import {AiFillChrome, AiFillHtml5} from "react-icons/ai";
import {DiBootstrap, DiCss3, DiJavascript1, DiNodejsSmall, DiPython} from "react-icons/di";
import {MdSwapCalls} from "react-icons/md";
import {GiCoolSpices, GiSpring} from "react-icons/gi";
import Grid from "@material-ui/core/Grid";
import SkillCard from "./SkillCard";

export default function Skills() {
    const skillData = [
        {
            title: "Dev Tools",
            skills: ["VSkisual Studio Code", "Webstorm", "Postman", "DevTools", "RunJS"],
            icons: [SiVisualstudiocode, SiWebstorm, SiPostman, AiFillChrome, DiJavascript1]
        },
        {
            title: "Front-End",
            skills: ["React", "Javascript", "HTML", "CSS", "Material UI", "React-Spring", "Bootstrap", "Python"],
            icons: [SiReact, SiJavascript, AiFillHtml5, DiCss3, SiMaterialUi, GiSpring, DiBootstrap, DiPython]
        },
        {
            title: "Back-End",
            skills: ["Node.js", "REST APIs", "Mocha", "Chai"],
            icons: [DiNodejsSmall, MdSwapCalls, SiMocha, GiCoolSpices]
        }
    ]

    const skillCardMap = skillData.map((card, idx) =>
        <SkillCard
            key={idx}
            title={card.title}
            cardList={card.skills}
            icons={card.icons}/>
    );

    return (
        <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
        >
            {skillCardMap}
        </Grid>

    )
}