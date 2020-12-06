import React, {useEffect, useRef} from 'react';
import {IconButton} from "@chakra-ui/react";
import useHover from "@react-hook/hover";


export default function LinkIcon(props) {

    const iconButton = useRef(null);
    const iconHovering = useHover(iconButton, {enterDelay: 100, leaveDelay: 100});

    //hover mouse colors for buttons
    useEffect(() => {
        if(iconHovering) {
            iconButton.current.style.color = "black";
        }
        else {
            iconButton.current.style.color = "white";
        }
    }, [iconHovering])


    //prop variables
    const CardIcon = props.icon;
    const link = props.link;

    return (
        <div style={centerButtons}>
            <IconButton
                style={buttonStyle}
                variant="outline"
                colorScheme="red"
                aria-label="gitHub"
                fontSize="20px"
                icon={<CardIcon/>}
                ref={iconButton}
                onClick={(e) => (window.open(link))}
            />
        </div>
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