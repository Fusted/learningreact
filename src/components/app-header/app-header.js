import React from "react";
import './app-header.css';
import styled from 'styled-components'

const Header = styled.div`
    display: felx;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = () => {
    return (
        <Header>
            <h1>Fusted</h1>
            <h2>Какие то записи</h2>
        </Header>
    )
}

export default AppHeader