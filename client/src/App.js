import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/signup.js';
import Navbar from './components/Navbar.js';
import {Route, Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router >
      <Route path="/signup" element={<Signup/>} />
      </Router>
      <Signup />
    </div>
  );
}

export default App;
