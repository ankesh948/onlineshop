import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import $ from 'jquery';
import jwtDecode from "jwt-decode";
import { Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';

function Sidebar() {
  const [getStatus, setStatus] = useState();

  useEffect(() => {
    $('.sub-menu').hide();
    $("#menu li #dropdown").click(function () {
      $(this).next('.sub-menu').slideToggle('slow');
      $(this).parent().siblings().find('.sub-menu').slideUp('slow');
    });
    $(document).ready(function () {
      $("#collab").css('cursor', 'pointer').click(function () {
        $('.sidebar').toggleClass('slow');
      });
    });

    $('.header__main').hide();
  });

  function getCurrentUser() {
    try {
      const jwt = localStorage.getItem("accessToken");
      return jwtDecode(jwt);
    } catch {
      return null;
    }
  }
  if (!getCurrentUser()) {
    return (
      <Navigate to="/admin" />
    );
    }
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    return setStatus(true)
  };

  if (getStatus) {
    return <Dashboard />
  }


  return (
    <>
      <div className='sidebar'>
        <div className='title-box'>
          <img src="/img/logo-light1.png" width="175" alt="" />
        </div>
        <ul id="menu">
          <li><Link to="/dashboard"><i className='bx bxs-dashboard'></i>  DashBoard</Link></li>
          <li><Link to=""><i className='bx bx-message-square' ></i> Pages</Link></li>
          <li><Link to="/addproduct"><i className='bx bxs-building-house'></i> Add Products</Link></li>
          <li><Link to=""><i className='bx bx-align-left'></i> Manage Categories</Link>
            <i id="dropdown" className='bx bx-chevron-down'></i>
            <ul className="sub-menu">
              <li><Link to="">Sub Item 1</Link></li>
              <li><Link to="">Sub Item 1</Link></li>
              <li><Link to="">Sub Item 1</Link>
                <i id="dropdown" className='bx bx-chevron-down'></i>
                <ul className="sub-menu">
                  <li><Link to="">Sub Item 1</Link></li>
                  <li><Link to="">Sub Item 1</Link></li>
                  <li><Link to="">Sub Item 1</Link></li>
                  <li><Link to="">Sub Item 1</Link></li>
                </ul>
              </li>
              <li><Link to="">Sub Item 1</Link></li>
            </ul>
          </li>
          <li><Link to=""><i className='bx bx-user' ></i> Users</Link></li>
          <li><Link to=""><i className='bx bx-border-radius'></i> Orders</Link>
            <i id="dropdown" className='bx bx-chevron-down'></i>
            <ul className="sub-menu">
              <li><Link to="">Sub Item 1</Link></li>
              <li><Link to="">Sub Item 1</Link></li>
              <li><Link to="">Sub Item 1</Link></li>
              <li><Link to="">Sub Item 1</Link></li>
            </ul>
          </li>
          <li><Link to="" onClick={logout}><i className='bx bx-exit' ></i> LogOut</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar