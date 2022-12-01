// import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dash from './components/Dash';
require('dotenv').config()

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/dash' element={<Dash/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
