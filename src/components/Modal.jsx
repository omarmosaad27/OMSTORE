import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from './../context'
import {ButtonContainer} from './../utilities/Button'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value=>{
                    const {modalOpen, closeModal} = value;
                    const {img,price,title} = value.modalProduct;
                    if(!modalOpen){
                        return null 
                    }
                    else{
                        return(
                            <ModalContainer>
                                <div className="container">
                                    <div className="modal">
                                        <h5 className="msg">
                                            item added to the cart
                                        </h5>
                                        <div className="img-container">
                                        <img src={img} alt={title}/>
                                        </div>
                                        <h5 className="text-title">{title}</h5>
                                        <h5 className="price">
                                            ${price}
                                        </h5>
                                        <div className="buttons">
                                            <Link to="/">
                                                <ButtonContainer className="btn-bg" onClick={()=>closeModal()}> 
                                                    continue shopping
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart  onClick={()=>closeModal()}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                })}
            </ProductConsumer>
        )
    }
}


const ModalContainer = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:1000;
    .modal{
    background: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    border-radius: 0.5rem;
    transition: all 0.3s linear;
    border:  0.04rem solid white;
    width: 30vw;
    margin: auto;
    padding: 2rem 1rem;
    }
    .msg{
        background: rgba(52, 152, 219, 0.3);
        padding: 0.4rem 0.6rem;
        border-radius: 0.5rem;
    }
    .img-container{
        
        height: 300px;
    }
    .img-container img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    h5{
        margin-bottom: 1rem;
    }
    .price{
        width: 150px;
        margin: auto;
    }
    @media screen and (max-width:992px){
        .modal{
            width: 50vw;
        }
    }
    @media screen and (max-width:600px){
        .modal{
            width: 80vw;
        }
    }
`