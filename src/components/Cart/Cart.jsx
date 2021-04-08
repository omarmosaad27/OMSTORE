import React, { Component } from 'react'
import Title from './../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from './../../context.js'
import CartList from './CartList'
import CartTotals from './CartTotals'
export default class Cart extends Component {
    render() {
        return (
            <section className="cart">
                <ProductConsumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                                <div className="container">
                                    <Title name="your" title="cart"/>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history} />
                                </div>
                            )
                        }else{
                            return(
                                <div className="container">
                                    <EmptyCart />
                                </div>
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
