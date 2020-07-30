import React from 'react';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';

const Header = (props) => {

    return (
        <Row>
            <Col xs={12} className='text-center px-0'>
            <Jumbotron fluid className='border bg-info py-1 mb-3'>
                <Container>
                    <h1><b>Posts from Placeholder : {props.numPosts}</b></h1>
                    <p>
                       <em>su questa pagina vengono mostrati posts da JSONplaceholder</em> 
                     </p>
                </Container>
            </Jumbotron>
            </Col>
        </Row>
    )
} 

export default Header;