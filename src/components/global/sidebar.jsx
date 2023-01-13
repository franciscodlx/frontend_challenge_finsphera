import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Nav from 'react-bootstrap/Nav';

const Sidebar = (props) => {
  const {
    show,
  } = props;

  return (
    <nav id="sidebarMenu" className={ `col-md-3 col-lg-2 d-md-block bg-light sidebar collapse ${ show ? 'show' : '' }` }>
      <div className="position-sticky pt-3 h-100 d-flex justify-content-between flex-column">
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link href="#">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Explore</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </nav>
  );
}

export default Sidebar;