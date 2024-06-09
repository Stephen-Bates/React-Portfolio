import Navigation from './Navigation';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar expand='lg' className='lead bg-body-tertiary'>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Stephen Bates</Navbar.Brand>
        </LinkContainer>
        <Nav>
          <Navigation />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;