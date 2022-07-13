import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../../App.css';

function Header() {

  return (
    <>
      <header className="header__main fixed-top">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/" className="d-flex gap-3 justify-content-center align-items-center">
              <img src="/img/logo.png" width="175" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="news">News</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <a href="/userlogin">
              <button className='btn btn-sm btn-outline-dark me-2'>
                <i className="fa fa-sign-in me-2"></i> Login
              </button>
            </a>

            <a href="/signup" className='btn btn-sm btn-outline-dark me-2'>
              <i className="fa fa-user-plus me-2"></i>Sing Up
            </a>

            <button className='btn btn-sm btn-outline-dark'><i className="fa fa-shopping-cart me-2"></i>Cart (0)</button>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
