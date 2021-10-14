import {React, Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFiler from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import styled from 'styled-components'
import './app.css'



const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component{
    constructor (props) {
        super(props)
        this.state = {
            data: [
                {label: 'test', important: true, id: 'eq', like: true},
                {label: 'test1', id: 'dcs'},
                {label: 'test2',id: 'drerde'}
            ]
        }   
    }
   
    deleteItem = (id) =>{
        this.setState(({data}) => {
            const index = data.findIndex(element => element.id === id)
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    render() { 
        return (
            <AppBlock>
            <AppHeader />
            <div className = "search-panel d-flex ">
                <SearchPanel />
                <PostStatusFiler />
            </div>
            <PostList 
                posts = {this.state.data}
                toDelete = {this.deleteItem} />
            <PostAddForm />
            </AppBlock>
        )
        
    }

}

