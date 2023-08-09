import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

//components
import Home from "./components/Home";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Header from "./components/Header";
import Login from "./components/login";
import MerchantPage from './components/Merchants';
import Sidebar from "./components/Sidebar";
import Orders from "./components/Orders";
import Taskmanager from "./components/Taskmanager";
import Nopage from "./components/Nopage";

function App() {
  const [user, setUser] = useState({});
  const [merchants, setMerchants] = useState([])
  const [orders, setOrders] = useState([])
  const [currentMerchant, setCurrentMerchant] = useState({})
  console.log(currentMerchant);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(()=>{
    fetch("http://localhost:3000/merchandisers")
    .then(res=>res.json())
    .then(data=>setMerchants(data))
  }, [])

  useEffect(()=>{
    fetch("http://localhost:3000/orders")
    .then(res=>res.json())
    .then(data=>setOrders(data))
  }, [])

  function handleLogout() {
    setUser({});
  }

  console.log(user)

  return (
      <BrowserRouter>
        <Header user={user} setCurrentMerchant={setCurrentMerchant} onLogout={handleLogout} merchants={merchants} orders={orders}/>
        <div className="app d-flex justify-content-between">
          <Sidebar/>
        
        <Routes>
            <Route path="*" element={
              <>
              <Nopage merchants={merchants} orders={orders}/>
              </>
            }>
            </Route>

            <Route path="/" element={
              <>
              <Home setCurrentMerchant={setCurrentMerchant} merchants={merchants} orders={orders}/>
              </>
            }>
            </Route>

            <Route path="/login" element={<Login onLogin={setUser} />} />

            <Route path="/register" element={<RegisterForm />} />

            <Route path="/merchant/login" element={<LoginForm />} />

            <Route path="/merchants" element={
                <>
                  <MerchantPage setCurrentMerchant={setCurrentMerchant} currentMerchant={currentMerchant} merchants={merchants}/>
                </>
              }>
            </Route>

            <Route path="/orders" element={
                <>
                  <Orders setCurrentMerchant={setCurrentMerchant} currentMerchant={currentMerchant} merchants={merchants}/>
                </>
              }>
                
            </Route>  

            <Route path="/taskmanager" element={
                <>
                  <Taskmanager setCurrentMerchant={setCurrentMerchant} currentMerchant={currentMerchant} merchants={merchants}/>
                </>
              }>
            </Route> 

        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
