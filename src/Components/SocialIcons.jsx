import React from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {IconButton} from "@chakra-ui/react";
import {SiGithub, SiLinkedin} from "react-icons/si";

export default function SocialIcons() {

    //hover mouse colors for buttons
    function onChangeColor(e) {
        e.target.style.color = 'black';
    }
    function offChangeColor(e) {
        e.target.buttonStyle = 'white';
    }

    return (
        <ButtonGroup
            variant="text"
            aria-label="social buttons"
            style={centerButtons}>
            <IconButton
                style={buttonStyle}
                variant="outline"
                colorScheme="red"
                aria-label="gitHub"
                fontSize="20px"
                icon={<SiGithub/>}
                onMouseOver={onChangeColor}
                onMouseOut={offChangeColor}
                onClick={(e) => (window.open('https://github.com/Topher-Dunlap'))}
            />
            <IconButton
                style={buttonStyle}
                variant="outline"
                colorScheme="red"
                aria-label="gitHub"
                fontSize="20px"
                onMouseOver={onChangeColor}
                onMouseLeave={offChangeColor}
                icon={<SiLinkedin/>}
                onClick={(e) => (window.open('https://www.linkedin.com/in/developerdunlap/'))}
            />
        </ButtonGroup>
    )
}

const centerButtons = {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    display: "block",
}

const buttonStyle = {
    padding: "5px",
    marginBottom: "2rem",
    color: "white",
}