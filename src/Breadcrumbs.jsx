import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import {
    NavLink
} from "react-router-dom";

const Breadcrumbs = (props) => {

    return (

        <Breadcrumb className='ml-3'>
         <NavLink to="/">Home</NavLink>
          / Post {props.postId}
        </Breadcrumb>

       // <Col xs={12}>
        //     <NavLink to="/">Home</NavLink>
        //      /  Post {props.postId}
        // </Col>
    );
}

export default Breadcrumbs;