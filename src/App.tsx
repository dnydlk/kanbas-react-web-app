// import React from "react";
// import logo from "./logo.svg";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import './App.css';
import Labs from "./labs/Labs";
//* imports ./Labs/index.tsx
import HelloWorld from "./labs/a3/HelloWorld";
//* if the HelloWorld component would have been implemented in HelloWorld/index.tsx, the import statement would have been the same. This simplifies deciding implementing components as single file or a folder. If the extension is omitted from the import statement, then first it will attempt to import a file called HelloWorld.tsx. If it fails it will then attempt to import index.tsx in a folder called HelloWorld, e.g., HelloWorld/tsx. Since the HelloWorld component is trivial, we decided to use a single file, e.g., HelloWorld.tsx
import Kanbas from "./Kanbas";
//* this import statement will first attempt to import a file called Kanbas.tsx, and if it fails it will then attempt to import index.tsx in a folder called Kanbas, e.g., Kanbas/index.tsx, which is what we have here
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    //* return can only return a single component that's why we wrap the whole content with a <div>
    <div id="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/kanbas/*" element={<Kanbas />} />
          <Route path="/hello/*" element={<HelloWorld />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
