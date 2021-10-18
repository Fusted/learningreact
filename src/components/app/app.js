import {React, Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
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
            data: [],
            term: '',
            filter: 'all'
        }   
        this.maxId = 4
        this.isWork = false
    }


    toggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(element => element.id === id),
                  old = data[index],
                  newItem = {...old, important: !old.important},
                  newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            
            return {
                data: newArr
            }
        })
    }

    toggleLike = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(element => element.id === id),
                  old = data[index],
                  newItem = {...old, like: !old.like},
                  newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            
            return {
                data: newArr
            }
        })
    }
    


    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(element => element.id === id)
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    addItem = (body) => {
        const item = {
            label: body,
            important: false, 
            id: this.maxId++,
            like: false
        }
        
        this.setState(({data}) => {
            const newArr = [...data, item]

            return {
                data: newArr
            }
        })        
    }
    searchPost = (items, term) => {
        if (term.length === 0){
            return items
        } 
        return items.filter(item => item.label.indexOf(term) > -1)
    }

    changeTerm = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        if (filter === 'like'){
            return items.filter(item => item.like)
        } else {
            return items
        }
    }


    onFilter = (filter) => {
        this.setState({filter})
    }

    getData = () => {  
        return(
            fetch('http://localhost:3000/data')
            .then(resp => resp.json())
            .catch(er => [{label: 'test', important: true, id: 1, like: true}])
        )
    }

    componentDidMount() {
        fetch('http://localhost:3000/data')
        .then(resp => resp.json())
        .then(ans => {
            this.setState({
                data: ans
            })
        })
    }

    render() { 
        

        const {data, term, filter} = this.state

        const liked = this.state.data.filter(item => item.like).length
        const allPosts = this.state.data.length
        
        const vivsiblePosts = this.filterPost((this.searchPost(data, term)), filter)                
        
        return (
            <AppBlock>
            <AppHeader
            liked = {liked}
            allPosts = {allPosts}
             />
            <div className = "search-panel d-flex ">
                <SearchPanel 
                    onChangeTerm = {this.changeTerm}
                />
                <PostStatusFilter 
                onFilter = {this.onFilter}
                filter = {filter}/>
            </div>
            <PostList 
                posts = {vivsiblePosts}
                onToggleImportant = {this.toggleImportant}
                onToggleLiked = {this.toggleLike}
                onDelete = {this.deleteItem} />
            <PostAddForm
            
            onAdd = {this.addItem}
             />
            </AppBlock>
        )
        
    }

}

/*
{label: 'test', important: true, id: 1, like: true},
{label: 'test1', important: false, id: 2, like: false},
{label: 'test2', important: false, id: 3, like: false}
*/