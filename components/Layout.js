import Nav from './Nav';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';




const Layout = props => (
  <Container className="px-0">
    <Nav />
    {props.children}
    <Footer />
  </Container>
);

export default Layout;