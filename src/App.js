import React from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import NavList from './Components/NavList';
import SwitchNavRoutes from './Components/SwitchNavRoutes';
import ThemeContext from "./Components/ThemeContext";

function App() {

    const contextValue = {
        theme: {
            backgroundColor: "#181818",
            color: "#fefefe",
            WebkitBoxAlign: "center",
            WebkitBoxPack: "center",
            fontSize: "3.5rem",
            fontFamily: 'Ubuntu, sans-serif',
            position: "relative",
            textAlign: "center",
            margin: "1rem",
        }
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            <main style={borderStyle}>
                <NavList/>
                <div>
                    <ErrorBoundary>
                        <SwitchNavRoutes/>
                    </ErrorBoundary>
                </div>
            </main>
        </ThemeContext.Provider>
    );
}

export default App;



const borderStyle = {
    backgroundColor: "#181818",
    borderLeft: "9px solid white",
    borderRight: "9px solid white",
    borderTop: "20px solid white",
    borderBottom: "20px solid white",
}