import React from 'react';
import SocialIcons from "./SocialIcons";
import ArticleGrid from "./ArticleGrid";

export default function Articles() {

    return (
        <section style={bodyStyle}>
            <div>
                <h1>Articles</h1>
            </div>
            <div>
                <ArticleGrid/>
            </div>
            <div>
                <SocialIcons/>
            </div>
        </section>
    )
}

const bodyStyle = {
    backgroundColor: "#181818",
    color: "#fefefe",
    WebkitBoxAlign: "center",
    WebkitBoxPack: "center",
    fontSize: "3.5rem",
    fontFamily: 'Ubuntu, sans-serif',
    textAlign: "center",
}