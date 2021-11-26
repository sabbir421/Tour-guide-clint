
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
  const{user,logOut}=useAuth();
  
  console.log(user);
    return (
        <>
         <Navbar className='mb-2' bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Tour <span className='text-warning'>Guide</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='text-warning' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='text-warning' as={HashLink} to="/home#services">Services</Nav.Link>
                        
                            <Nav.Link className='text-warning' as={HashLink} to="/addService">Add Service</Nav.Link>
                            <Nav.Link className='text-warning' as={HashLink} to="/myOrder">my order</Nav.Link>
                             {user?.email? <Nav.Link className='text-warning' as={HashLink} to="/allOrder">maneg all order</Nav.Link>: <></>}

                        
                        <Nav.Link className='text-warning' as={HashLink} to="/registation">registation</Nav.Link>

                       
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                           <a href="#login" className='ms-3 text-white'>{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  
</>
    );
};

export default Header;