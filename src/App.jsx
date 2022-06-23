import React from "react"
import Navbar from "./navbar"
import Component from "./newscomp"
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'



function App() {
  const [progress, setProgress] = React.useState(0)

  return (
    <div>
     <BrowserRouter>
        <Navbar />
        {/* <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        /> */}
        <Routes>
          <Route path="/" element={<Component setProgress={setProgress} key={"general"} category="general" />} />
          <Route path="/business" element={<Component setProgress={setProgress} key={"business"} category="business" />} />
          <Route path="/entertainment" element={<Component setProgress={setProgress} key={"entertainment"} category="entertainment" />} />
          <Route path="/health" element={<Component setProgress={setProgress} key={"health"} category="health" />} />
          <Route path="/science" element={<Component setProgress={setProgress} key={"science"} category="science" />} />
          <Route path="/sports" element={<Component setProgress={setProgress} key={"sports"} category="sports" />} />
          <Route path="/technology" element={<Component setProgress={setProgress} key={"technology"} category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


