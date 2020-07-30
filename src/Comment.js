import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';

const Comment = (props) => {

    return (
        <ListGroup.Item className='pl-2'>
            <b>{props.id}</b> <br />
            <ReactTooltip />
            <b>Nome</b> : <span data-tip={`email: ${props.email}`}> {props.name} </span>  <br />
            <b>Commento</b> : {props.body}
        </ListGroup.Item>
    );
}
export default Comment;
 


/* <b>Nome</b> :
            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-${props.id}`}>
                        email : {props.email}.
                    </Tooltip>
                }
            >
                <span> {props.name} <br /> </span>
            </OverlayTrigger> */
