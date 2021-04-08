import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './../context'
export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductWrapper>
                
                <div className="card">
                    <ProductConsumer>
                        {value=>{
                            return(
                                <div className="img-container" onClick={()=>value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt={title}/>
                                </Link>
                                <button className="cart-btn" 
                                onClick={()=>{value.addToCart(id);
                                            value.openModal(id)}
                                } 
                                disabled={inCart ? true : false}>
        
                                    {inCart ? ( <p className="incart-msg" disabled>in cart</p>):(<i className="fas fa-cart-plus"></i>)}
                                </button>
                                </div>
                            )    
                        }}

                    </ProductConsumer>
                    {/* cart footer */}
                    <div className="card-footer">
                        <p className="product-name">{title}</p>
                        <h4 className="price">${price}</h4>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}


const ProductWrapper = styled.div `
    .card{
    background: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    border-radius: 0.5rem;
    transition: all 0.3s linear;
    border:  0.04rem solid white;
    }
    .img-container{
        padding: 1rem ;
        position: relative;
        overflow: hidden;
    }
    .img-container:hover img{
        transform: scale(1.1);
    }
    .img-container img{
        width: 70%;
        transition: all 0.5s linear;
    }
    .card-footer{
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem 1rem 1rem ;
    margin-top: 2rem;
    align-items: center;
    transition: all 0.5s linear;

    }

    .price{
    background: rgba(52, 152, 219, 0.3);
    padding: 0.2rem 0.6rem;
    border-radius: 0.5rem;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(248, 248, 248);
            border-radius: 0 0  0.5rem  0.5rem;
        }
    }
    .cart-btn{
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 0.3rem 0.5rem;
        background: var(--light-blue);
        border: none;
        color: var(--main-white);
        font-size: 1.4rem;
        border-radius:  0.5rem 0 0 0 ;
        transform: translate(100%,100%);
        transition: all 200ms linear;
        cursor: pointer;

    }
    .img-container:hover .cart-btn{
        transform: translate(0,0);
    }
    .cart-btn:hover{
        
    }
`