import React from 'react';
import {IconButton} from "@chakra-ui/react";


export default function LinkIcon(props) {
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