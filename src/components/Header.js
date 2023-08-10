import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
function Header({ user, handleLogout, merchants, orders, setCurrentMerchant }) {

  const [showSearchCard, setShowCard] = useState(false)
  const [headerSearch, setHeaderSearch] = useState("0")
  const nav = useNavigate()

  function toggleCard(e){
    e.preventDefault()
    setTimeout(()=>setShowCard(!showSearchCard), 500)
  }

  function navigateToMerchant(e, merchant){
    e.preventDefault()
    setCurrentMerchant(merchant)
    nav('/merchants')
  }
  
  useEffect(()=>{
    headerSearch===""&&setHeaderSearch("0")
  },[headerSearch])

  return (
    <div>
      <header className="header header-custom header-fixed header-one">
        <div className="container-fluid">
              <nav className="navbar mt-2 container-fluid justify-content-between align-items-center">
            <div className="navbar-header">
            
              <a href="/" className="navbar-brand logo">
                {/* Your logo image */}
              </a>
              <a href="/" className="navbar-brand fw-bold">mashPlannr.</a>
            </div>
            <div className="main-menu-wrapper d-flex align-items-center">
              <div className="menu-header">
                <a href="/" className="menu-logo">
                  {/* Your logo image */}
                </a>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="#"
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
                
                <li className="search-bar">
                  <form>
                    <input className="form-control" id="header-search" placeholder="Search..." autoComplete="off" onBlur={e=>toggleCard(e)} onFocus={e=>toggleCard(e)} onChange={e=>setHeaderSearch(e.target.value)}/>
                  </form>
                  <div className="card form-card" style={{display: showSearchCard?"block":"none"}}>
                    <ul className="search-results">
                      {merchants.filter(this_merchant=>this_merchant.name.toLowerCase().includes(headerSearch.toLowerCase())).map(merchant=><li key={merchant.id} className="merchant-result result" onClick={e=>navigateToMerchant(e, merchant)}>{merchant.name}</li>)}
                      {orders.filter(this_order=>this_order.customer_name.toLowerCase().includes(headerSearch.toLowerCase())).map(order=><li key={order.id} className="order-result result">Order from {order.customer_name}</li>)}
                      {orders.filter(this_order=>this_order.customer_name.toLowerCase().includes(headerSearch.toLowerCase())).map(order=><li key={order.id} className="order-result result">{order.customer_name}</li>)}
                    </ul>
                  </div>
                </li>

                {user?.name===undefined?
                  <>
                    <li className="register-btn login-btn">
                    <a
                      href="/login
                    "
                      className="btn btn-primary border-0"
                    >
                      <i className="feather-user"></i>Login
                    </a>
                  </li>
                  <li className="register-btn">
                    <a
                      href="/register
                    "
                      className="btn reg-btn"
                    >
                      <i className="feather-user"></i>Register
                    </a>
                  </li>
                  </>
                  :
                  <li className="register-btn">
                    <a href="/logout" className="btn btn-primary log-btn">
                      <i onClick={handleLogout} className="feather-lock"></i>
                      Logout
                    </a>
                  </li>
                }
              </ul>
            </div>
          </nav>
        </div>
      </header>

    </div>
  );
}

export default Header;
