import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useState } from 'react';
import { SearchkeyContext } from '../Context/Contextsharee';

function Header() {
  const { searchkey, setSarchkey } = useContext(SearchkeyContext)


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/cart'} className='btn'>Cart</Link>
            <Link to={'/wishlist'} className='ml-10 btn' href="#link">Wishlist</Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

            <Form className='ml-40 '>
              <Row>
                <Col xs="auto">
                  <input onChange={(e)=>setSarchkey({...searchkey,searchkey:e.target.value})}
                   
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2 form-control"
                  />
                </Col>

              </Row>
            </Form>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;