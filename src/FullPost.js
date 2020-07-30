import React, { useEffect, useState } from 'react';
import { Row, Col, ListGroup, Button, ButtonGroup } from 'react-bootstrap';
import { getItem } from './servizi/ServicesAPI';
import Comment from './Comment';
import {
    Link,
} from "react-router-dom";
import Breadcrumbs from './Breadcrumbs';

const FullPost = (props) => {

    const [post, setPost] = useState({}); //il post è un singolo oggetto
    const [comments, setComments] = useState([]); //commenti sono un array di oggetti
     //simula un componentDidMount
    useEffect(() => {
        const id = props.id;//recuperare id in modo dinamico con react router :id
        //recupero singolo post
         getItem(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(json => {
                 setPost(json) 
            })

        //recupero commenti
         getItem(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(json => {
                setComments(json)
            })
    }, [props.id]);

    //faccio il map dei commenti per mostrarli nella lista
    const commenti = comments.map((comment, index) => {
        return <Comment key={index} name={comment.name} body={comment.body} id={comment.id} email={comment.email} />
    }
    )

    return (

        <Row>
            <Breadcrumbs postId={post.id} />
            {/* <Col xs={{ offset: 10 }}> */}
            <Col xs={12}>

                <ButtonGroup className='float-right mb-2'>
                    <Link to={`/posts/${post.id - 1}`}>
                        <Button size='sm' variant='info' className='mx-2'
                            disabled={(post.id <= 1) ? true : false}>🡸
                        </Button>
                    </Link>
                    <Link to={`/posts/${post.id + 1}`}>
                        <Button size='sm' variant='info'
                            disabled={(post.id >= props.numPosts) ? true : false}>🡺
                        </Button>
                    </Link>
                </ButtonGroup>

            </Col>
            <Col xs={12}>
                <h3><b><u>{post.title}</u></b></h3>
            </Col>
            <Col xs={12}>
                {post.body}
            </Col>
            <Col xs={12} className='my-3'>
                <h5><b>Commenti</b></h5>
                <ListGroup>
                    {commenti}
                </ListGroup>
            </Col>
        </Row>

    );
}

export default FullPost;