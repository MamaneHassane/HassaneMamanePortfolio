import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/f" Component={Footer}/>
        <Route exact path="/h" Component={Header}/>
      </Routes> 
    </Router>
  );
}

export default App;
