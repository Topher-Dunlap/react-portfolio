import React from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {IconButton} from "@chakra-ui/react";
import {SiFarfetch, SiBitdefender} from "react-icons/si";
// import {BsSlash} from "react-icons/bs";
// import {FaSlash} from "react-icons/fa";

export default function ProjectSocialIcons(props) {

    const frontEndLink = props.frontEndLink;
    const backEndLink = props.backEndLink;

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
                icon={<SiFarfetch/>}
                onClick={(e) => (window.open(`${frontEndLink}`))}
            />
            <IconButton
                style={buttonStyle}
                variant="outline"
                colorScheme="red"
                aria-label="gitHub"
                fontSize="20px"
                icon={<SiBitdefender/>}
                onClick={(e) => (window.open(`${backEndLink}`))}
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
