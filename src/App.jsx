import React from "react"
import Navbar from "./navbar"
import Component from "./newscomp"
import { Routes, Route, BrowserRouter } from "react-router-dom";




function App() {
  const [progress, setProgress] = React.useState(0)

  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Component key={"general"} category="general" />} />
          <Route path="/business" element={<Component key={"business"} category="business" />} />
          <Route path="/entertainment" element={<Component key={"entertainment"} category="entertainment" />} />
          <Route path="/health" element={<Component key={"health"} category="health" />} />
          <Route path="/science" element={<Component key={"science"} category="science" />} />
          <Route path="/sports" element={<Component key={"sports"} category="sports" />} />
          <Route path="/technology" element={<Component key={"technology"} category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


