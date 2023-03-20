import {BrowserRouter, Routes, Route}from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Contact from './Page/Contact';
import Home from './Page/Home';
import Products from './Page/Products';
import Users from './Page/Users';
import CreateAccountForm from "./Components/CreateAccountForm";


function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      
      
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/form" element={<CreateAccountForm/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/user" element={<Users/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
