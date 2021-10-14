import React, {Component} from "react";
import './post-list-item.css'

export default class PostListItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            important: !!props.important,
            like: !!props.like
        }
    }
    
    changeImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    
    changeLike = (e) => {

        if (e.target.classList.contains('app-list-item')){
            this.setState(({like}) => ({
                like: !like
            }))
        }
    }

    render() {
        const {label, toDelete} = this.props
        const {important, like} = this.state
        let classNames = 'app-list-item d-flex justify-content-between'

        if (important) {
            classNames += ' important'
        }

        if (like) {
            classNames += ' like'
        }

        return (
            <div className = {classNames} onClick = {this.changeLike}>
                <span className = 'app-list-item-label'>
                    {label}
                </span>

                <div className = 'd-flex justify-content-center align-items-center'>
                    <button 
                    onClick = {this.changeImportant}
                    type = 'button' 
                    className='btn-star btn-sn'>

                        <i className='fa fa-star'></i>
                    </button>

                    <button 
                    type = 'button'
                    onClick = {toDelete} 
                    className='btn-trash btn-sn'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

