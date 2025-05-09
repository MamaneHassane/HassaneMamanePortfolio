import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home.tsx";
import { CurriculumVitae } from "./pages/CurriculumVitae.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Fun } from "./pages/Fun.tsx";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/cv" Component={CurriculumVitae}/>
          <Route exact path="/projects" Component={Projects}/>
          <Route exact path="/fun" Component={Fun}/>
      </Routes> 
    </Router>
  );
}

export default App;
