import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import Home from './components/Home';
import Charts from './components/Charts';
import Tables from './components/tables';
import Fourzeroone from './components/401';
import Fourzerofour from './components/404';
import Fivezerozero from './components/500';
import Layoutnav from './components/layout-sidenav-light';
import LayoutStatic from './components/layout-static';
import Password from './components/password';
import './App.css';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<div><Home /></div>} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/401" element={<Fourzeroone />} />
        <Route path="/404" element={<Fourzerofour />} />
        <Route path="/500" element={<Fivezerozero />} />
        <Route path="/layout-sidenav-light" element={<Layoutnav />} />
        <Route path="/layout-static" element={<LayoutStatic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
