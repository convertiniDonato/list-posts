import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {
   Link,
} from "react-router-dom";

const Post = (props) => {

   return (

         
         <Link to={`/posts/${props.id}`}>

            <ListGroup.Item as='li' variant='light' className='px-2 text-dark'>
               <b>{props.id}.</b> {props.title}
            </ListGroup.Item>

         </Link>

   );
}

export default Post;