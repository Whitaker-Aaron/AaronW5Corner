import Home from "./components/Home.tsx";
import Works from "./components/Works.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "react-bootstrap";

function App() {

  return <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/works" element={<Works />}>
        </Route>
      </Routes>
    </Router>

  </>

}

export default App;