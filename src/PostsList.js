import React from 'react';
import {Row, Col, ListGroup} from 'react-bootstrap';
import Post from './Post';

const PostsList = (props) => {

    const posts = props.posts.map((post, index) => {
        return <Post title={post.title} id={post.id} key={index} />
    }
    )


    return ( 
        <Row className='justify-content-center'>
            <Col xs={12} md={6}>
            <h3 className='py-1 mb-0 text-center'><b><u>Titoli</u></b></h3>
                <ListGroup as="ul">
                    {posts}
                </ListGroup>
            </Col>
        </Row>
        
     );
}
 
export default PostsList;