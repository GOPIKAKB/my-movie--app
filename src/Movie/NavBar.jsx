import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
  let text ={
    textDecoration:'none',
    color:'white'
  }
  return (
    <div style={{backgroundColor:'black'}}>
       <Navbar variant="light" >
        <Container>
          <Navbar.Brand href="#home"><img src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png' width={100} style={{marginLeft:'20px'}}></img></Navbar.Brand>
          <Nav className="me-auto, justify-content-end">
          <Nav.Link><Link style = {text} to='/'>Home</Link> </Nav.Link>

            <Nav.Link ><Link style = {text} to='/comedy-movie'>ComedyMovies</Link> </Nav.Link>
            <Nav.Link ><Link style = {text} to='/latest-movie'>LatestMovies</Link>  </Nav.Link>
            <Nav.Link ><Link style = {text} to='/popular-movie'>PopularMovies</Link>  </Nav.Link>
          </Nav>
        </Container>
        <button style={{backgroundColor:'#c30711',color:'white', width:'100px',marginRight:'70px',borderRadius:'6px'}}><b>sign in</b></button>
      </Navbar>
    </div>
  )
}

export default NavBar
