import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/signup.js';
import {Route, Routes} from 'react-router-dom'
import { Login } from './pages/login.js';
import { dashboard } from './pages/dashboard.js';
import { Landingpage } from './pages/landingpage.js';

function App() {
  return (
    <div className="App">
      <Routes >
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<dashboard/>} />
      <Route path="/landingpage" element={<Landingpage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
