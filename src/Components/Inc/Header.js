import { Link, NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Header() {

  return (
    <>
    
      <header className="header__main fixed-top">
      <Navbar expand="lg">
          <Container>

            <Link to="/" className="d-flex gap-3 justify-content-center align-items-center">
              <img src="/img/logo.png" width="175" alt="" />
            </Link>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav className="m-auto my-2 my-lg-0">
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/news">News</NavLink>
                <NavLink className='nav-link' to="/admin">Admin</NavLink>
              </Nav>
            </Navbar.Collapse>

            <Link to="/userlogin" className='btn btn-sm btn-outline-dark me-2'>
                <i className="fa fa-sign-in me-2"></i> Login
            </Link>

            <Link to="/signup" className='btn btn-sm btn-outline-dark me-2'>
              <i className="fa fa-user-plus me-2"></i>Sing Up
            </Link> 

            <button className='btn btn-sm btn-outline-dark'><i className="fa fa-shopping-cart me-2"></i>Cart (0)</button>

          </Container>
        </Navbar> 

      </header>
    </>
  )
}

export default Header
