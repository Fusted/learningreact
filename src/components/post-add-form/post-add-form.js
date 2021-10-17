import React, {Component} from "react";
import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor (props){
        super(props)
        this.state = {
            text: ''
        }
    }

    valueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.text){
            this.props.onAdd(this.state.text)
            this.setState({text: ''})
        }
    }
    
    render(){
        return(
            <form 
                onSubmit = {this.onSubmit}
                className = 'bottom-panel'>
                <input 
                    onChange = {this.valueChange}
                    type = 'text'
                    placeholder = 'Написать новый пост'
                    className = 'form-control new-post-label'
                    value = {this.state.text}/>
                <button
                    type = 'submit'
                    className = 'btn btn-outline-secondary'
                >Добавить</button>
            </form>
        )
    }
    
}



