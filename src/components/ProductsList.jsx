import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import  { ProductConsumer }from '../context.js'
export default class ProductsList extends Component {
    
    render() {
        return (
            <>
                <div className="productlist">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="products-grid">
                            <ProductConsumer>
                                {value=>{
                                    return(
                                        value.products.map(product =>{
                                            return(
                                                <Product key={product.id} product={product}/>
                                            )
                                        })
                                    )
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
