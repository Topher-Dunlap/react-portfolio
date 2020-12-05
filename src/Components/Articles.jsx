import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import SocialIcons from "./SocialIcons";
import ArticleGrid from "./ArticleGrid";

export default function Articles() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    return (
        <section style={theme}>
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

// const bodyStyle = {
//     backgroundColor: "#181818",
//     color: "#fefefe",
//     WebkitBoxAlign: "center",
//     WebkitBoxPack: "center",
//     fontSize: "3.5rem",
//     fontFamily: 'Ubuntu, sans-serif',
//     textAlign: "center",
// }