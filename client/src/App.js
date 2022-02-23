import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/Login/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/HomePage/Home';
import { useState } from 'react';
import useToken from "./useToken"
function App() {
  const {token,setToken}=useToken();
 if(!token){
 return <LoginPage setToken={setToken}/>
 }
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
   
    <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
