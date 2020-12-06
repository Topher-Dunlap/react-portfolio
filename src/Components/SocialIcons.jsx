import React, {useRef, useEffect} from 'react';
import useHover from '@react-hook/hover';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {IconButton} from "@chakra-ui/react";
import {SiGithub, SiLinkedin} from "react-icons/si";

export default function SocialIcons() {

    const gitHubButton = useRef(null);
    const gitHubHovering = useHover(gitHubButton, {enterDelay: 100, leaveDelay: 100});

    const linkedInButton = useRef(null);
    const linkedInHovering = useHover(linkedInButton, {enterDelay: 100, leaveDelay: 100});

    //hover mouse colors for buttons
    useEffect(() => {
        if(linkedInHovering) {
            linkedInButton.current.style.color = "black"
        }
        else {
            linkedInButton.current.style.color = "white";
        }
        if(gitHubHovering) {
            gitHubButton.current.style.color = "black";
        }
        else {
            gitHubButton.current.style.color = "white";
        }
    }, [gitHubHovering, linkedInHovering])


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
                ref={gitHubButton}
                onClick={(e) => (window.open('https://github.com/Topher-Dunlap'))}
            />
            <IconButton
                style={buttonStyle}
                variant="outline"
                colorScheme="red"
                aria-label="gitHub"
                fontSize="20px"
                icon={<SiLinkedin/>}
                ref={linkedInButton}
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