import React, { Component } from 'react'
import styled from 'styled-components'
export default class Defauls extends Component {
    render() {
        return (
            <DefaultPage className="container default-page">

                <h1>404</h1>
                <h1>error</h1>
                <h1>page not found</h1>
                <h3> the requested url <span className="red"> {this.props.location.pathname} </span> was not found</h3>
            </DefaultPage>
        )
    }
}
const DefaultPage = styled.section ` 
    padding: 2rem 0;
    h1{
        margin-bottom: 1rem;
    }
    .red{
        color: #e74c3c;
    }
`
