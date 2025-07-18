import Home from "./components/Home.tsx";
import Works from "./components/Works.tsx";
import Thoughts from "./components/Thoughts.tsx";
import ArticlePage from "./components/ArticlePage.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { CookiesProvider } from "react-cookie"

function App() {

  return <>
    <CookiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/works" element={<Works />}>
          </Route>
          <Route path="/thoughts" element={<Thoughts />}>
          </Route>
          <Route path="/thoughts/:id" element={<ArticlePage />}>
          </Route>
        </Routes>
      </Router >
    </CookiesProvider >

  </>

}

export default App;