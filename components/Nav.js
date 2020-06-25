import Link from 'next/link';
import { useRouter } from "next/router";
import styles from './Nav.module.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nav = () => (
	

  <nav className={styles.navWrapper}>
  		<Row className="nav my-5 mx-0">
  			<Col sm className="d-flex justify-content-center justify-content-sm-start my-4 my-sm-0">
			    <Link href="/">
			      <a className="logoR">SUHAIL<br/>&nbsp;&nbsp;&nbsp;&nbsp;YOUNUS<br/>.COM</a>
			    </Link>
		    </Col>
		    <Col sm className="d-flex justify-content-center justify-content-sm-end align-items-center">
				<Link href="/about">                                                                         
				  <a>About</a>
				</Link> 
				<Link href="/professional">
				  <a>Professional</a>
				</Link>
				<Link href="/contact">
				  <a>Contact</a>
				</Link> 				
			</Col>
		</Row>
		<hr/>
  </nav>



);

export default Nav;


{/* 

  <nav className={styles.navWrapper}>
  		<Row className="my-5">
  			<Col sm className="d-flex justify-content-center justify-content-sm-start my-4 my-sm-0 px-0">
			    <Link href="/">
			      <a className="logoR">SUHAIL<br/>&nbsp;&nbsp;&nbsp;&nbsp;YOUNUS<br/>.COM</a>
			    </Link>
		    </Col>
		    <Col sm className="d-flex justify-content-center justify-content-sm-end align-items-center  px-0">
				<Link href="/about">                                                                         
				  <a>About</a>
				</Link> 
				<Link href="/professional">
				  <a>Professional</a>
				</Link>
				<Link href="/contact">
				  <a>Contact</a>
				</Link> 				
			</Col>
		</Row>
		<hr/>
  </nav>

*/} 


