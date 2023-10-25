import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
  <Navbar className="bg-primary" >
        <Container>
          <Navbar.Brand href="">
         <Link to={""} >
         <b className='m-3 fs-2 text-white'>Quiz Master</b>
         </Link>
          
         
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header