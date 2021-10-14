import React from "react";
import PostListItem from '../post-list-item'
import { ListGroup } from 'reactstrap';
import './post-list.css'

const PostList = ({posts, toDelete}) => {
    const elemets = posts.map(item => {
        const {id, ...itemProps} = item

        return (
            <li key = {id} className = 'list-group-item'>
                <PostListItem 
                id = {id}
                {...itemProps}
                toDelete = {() => {
                    toDelete(id)
                }}
                 />
            </li>
        )
    })

    return (
        <ListGroup className = 'app-list'>
            {elemets}
        </ListGroup>
    )
}


export default PostList