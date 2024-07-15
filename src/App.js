import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home.tsx";
import { CurriculumVitae } from "./pages/CurriculumVitae.tsx";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/cv" Component={CurriculumVitae}/>
      </Routes> 
    </Router>
  );
}

export default App;
