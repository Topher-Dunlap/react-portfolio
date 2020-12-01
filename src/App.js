import React from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import NavList from './Components/NavList';
import SwitchNavRoutes from './Components/SwitchNavRoutes'

function App() {

  return (
    <main style={borderStyle}>
      <NavList />
      <div>
        <ErrorBoundary>
          <SwitchNavRoutes />
        </ErrorBoundary>
      </div>
    </main>
  );
}

export default App;

const borderStyle ={
    backgroundColor: "#181818",
    borderLeft: "9px solid white",
    borderRight: "9px solid white",
    borderTop: "20px solid white",
    borderBottom: "20px solid white",
}