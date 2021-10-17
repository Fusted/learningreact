import React, {Component} from "react";
import './post-status-filter.css'
import { Button } from 'reactstrap'

export default class PostStatusFiler extends Component{

    constructor (props) {
        super(props)
        this.btns = [{name: 'all', label: 'все'}, {name: 'like', label: 'Понравившиеся'}]
    }


    render() {

        const btns = this.btns.map(({name, label}) => {
            const active = this.props.filter === name
            const btnColor = active ? 'info' : 'secondary'
            return (
                <Button 
                  key = {name}
                  outline color = {btnColor}
                  onClick = {() => this.props.onFilter(name)}  
                 >
                    {label}
                </Button>
            )
        })


        return (
            <div className = "btn-group">
                {btns}
            </div>
        )
    }

    
}

