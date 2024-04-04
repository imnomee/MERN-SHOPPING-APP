import { Navbar, Nav, Container} from 'react-bootstrap'
import { faShoppingCart, FaUser } from 'react-icons/fa'

const Header = () => {
      return (
            <header>
                  <Navbar bg='dark' variant='dark' expand='large' collapseOnSelect>
                        <Container>
                              <Navbar.Brand href='#'>ProShop</Navbar.Brand>
                              <Navbar.Toggle aria-controls='basic-navbar-nav' />
                              <Navbar.Collapse  id='basic-navbar-nav'>
                                    <Nav className='me-auto'>
                                          
                                    </Nav>
                              </Navbar.Collapse>

                        </Container>

                  </Navbar>
            </header>
      )
}