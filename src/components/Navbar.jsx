import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from './../img/commerce.png'
import {ButtonContainer} from './../utilities/Button'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar ">
                
                <ul className="navbar-item container"> 
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <img src={logo} alt="store" className="logo" />
                            <h2 className="text-title">OMStore</h2>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <ButtonContainer>
                                <i className="fas fa-cart-plus"></i>
                                My Cart
                            </ButtonContainer>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

