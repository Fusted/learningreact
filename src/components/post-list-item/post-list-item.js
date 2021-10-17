import React, {Component} from "react";
import './post-list-item.css'

export default class PostListItem extends Component {

    

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props
        
        const isToggleToLike = (t)=> {
            if (t.classList.contains('d-flex') || t.classList.contains('app-list-item-label') || t.classList.contains('fa-heart')){
                onToggleLiked()
            }
        }

        let classNames = 'app-list-item d-flex justify-content-between'

        if (important) {
            classNames += ' important'
        }

        if (like) {
            classNames += ' like'
        }

        return (
            <div className = {classNames} onClick = {(e) => isToggleToLike(e.target)}>
                <span className = 'app-list-item-label'>
                    {label}
                </span>

                <div className = 'd-flex justify-content-center align-items-center'>
                    <button 
                    onClick = {onToggleImportant}
                    type = 'button' 
                    className='btn-star btn-sn'>
                        <i className='fa fa-star'></i>
                    </button>

                    <button 
                    type = 'button'
                    onClick = {onDelete} 
                    className='btn-trash btn-sn'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

