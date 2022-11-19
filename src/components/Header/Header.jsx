import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import './Header.css'
import { Link } from "react-router-dom";
import wiki from '../assest/wiki.png'
import { useIsAuthenticated, useSignOut } from "react-auth-kit";



function Header() {
  const isAuth = useIsAuthenticated();
  const signOut = useSignOut();
  console.log(isAuth());
  return (
    <Navbar className="bg-slate-300" expand="lg">
      <Container fluid className="ms-4 me-4  " >
        <Navbar.Brand to="/" class="mr-16" id="logo"><img src={wiki} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto ">
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/Recipes">Recipes</NavLink>
            <NavLink className='nav-link' to="/About">About Us</NavLink>
            <NavLink className='nav-link' to="/Contact">Contact</NavLink>
          </Nav>

          {!isAuth() ? (
            <button className="px-2 py-2  text-white  bg-teal-900 rounded-md duration-150 hover:bg-teal-700 active:shadow-lg">
              <Link to="/login" className="flex items-center text-gray-200 hover:text-gray-200">
                Log In
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </button>) :
            (<button onClick={(e) => signOut()} className="px-2 py-2  text-white  bg-teal-900 rounded-md duration-150 hover:bg-teal-700 active:shadow-lg">
              <Link className="flex items-center text-gray-200 hover:text-gray-200">
                Logout
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </button>

            )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
