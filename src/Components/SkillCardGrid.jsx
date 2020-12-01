import React, {useState} from "react";
import {SiJavascript, SiMaterialUi, SiMocha, SiPostman, SiReact, SiVisualstudiocode, SiWebstorm} from "react-icons/si";
import {AiFillChrome, AiFillHtml5} from "react-icons/ai";
import {DiBootstrap, DiCss3, DiJavascript1, DiNodejsSmall, DiPython} from "react-icons/di";
import {MdSwapCalls} from "react-icons/md";
import {GiCoolSpices, GiSpring} from "react-icons/gi";
import {use3dEffect} from "use-3d-effect";
import Grid from "@material-ui/core/Grid";
import SkillCard from "./SkillCard";

export default function Skills() {
    const [devListState, setDevListState] = useState({
            title: "Dev Tools",
            skills: ["VSkisual Studio Code", "Webstorm", "Postman", "DevTools", "RunJS"],
            icons: [SiVisualstudiocode, SiWebstorm, SiPostman, AiFillChrome, DiJavascript1]
        }
    );

    const [frontEnd, setFrontEndState] = useState({
            title: "Front-End",
            skills: ["React", "Javascript", "HTML", "CSS", "Material UI", "React-Spring", "Bootstrap", "Python"],
            icons: [SiReact, SiJavascript, AiFillHtml5, DiCss3, SiMaterialUi, GiSpring, DiBootstrap, DiPython]
        }
    );

    const [backEnd, setBackEndState] = useState({
            title: "Back-End",
            skills: ["Node.js", "REST APIs", "Mocha", "Chai"],
            icons: [DiNodejsSmall, MdSwapCalls, SiMocha, GiCoolSpices]
        }
    );

    const ref = React.useRef(null);
    const {style, ...mouseHandlers} = use3dEffect(ref);

    return (
        <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
        >
            <SkillCard
                title={devListState.title}
                cardList={devListState.skills}
                icons={devListState.icons}/>
            <SkillCard
                title={frontEnd.title}
                cardList={frontEnd.skills}
                icons={frontEnd.icons}/>
            <SkillCard
                title={backEnd.title}
                cardList={backEnd.skills}
                icons={backEnd.icons}/>
        </Grid>

    )
}