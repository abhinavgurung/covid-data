import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

const footerStyle = {
	position: "absolute",
  bottom: 0,
  width: "100%",
  height: "2.5rem",
};

const Footer = () => {
	return (
		<div style={footerStyle}>
		<Jumbotron fluid>
			<Container fluid>
				
				<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
			</Container>
		</Jumbotron>
	</div>
		
	);
};

export default Footer;