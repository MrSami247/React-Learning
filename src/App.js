import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Service from './services';
import Cardrender from './Cardrender';
import Cards from './Cards';
import Mytime from './Mytime';
import Productrender from './Productrender';
import Myeffect from './Myeffect';
import Api from './Api';
import Formhandle from './Formhandle';
import Myref from './Myref';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Nav from './Nav';
import Fetchbyid from './Fetchbyid';
import Addproduct from './Addproduct';
import Fetchdata from './Fetchdata';
import Singledata from './Singledata';
import Addfile from './Addfile';



function App() {
  return (
   <>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/products' element={<Api/>}></Route>
    <Route path='/add' element={<Addproduct/>}></Route>
    <Route path='/fetch' element={<Fetchdata/>}></Route>
    <Route path='/fetch/:id' element={<Singledata/>}></Route>
    <Route path='/products/:id' element={<Fetchbyid/>}></Route>
    <Route path='/addfile' element={<Addfile/>}></Route>
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
