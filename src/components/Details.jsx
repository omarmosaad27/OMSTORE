import React, { Component } from 'react'
import {ProductConsumer} from './../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './../utilities/Button'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, title, img, price, company, info,inCart } = value.detailProduct;
                    return(
                        <div className="container">
                            <div className="detail-container">
                                {/* title */}
                                <h2 className="text-blue text-title">{title}</h2>
                                {/* end of title */}
                                {/* info */}
                                <div className="product-info-container">
                                    <div className="info-img-container">
                                        <img src={img} alt={title}/>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="model">Model: {title}</h2>
                                        <h4 className="text-title">made by: {company}</h4>
                                        <h4 className="text-title">price: <span  className="price"> ${price}</span></h4>
                                        <p className="text-title">some information about the product</p>
                                        <p className="lead">{info}</p>
                                        {/* buttons */}
                                        <div className="buttons">
                                            <Link to="/">
                                                <ButtonContainer className="btn-bg">
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false}
                                                            onClick={()=>{value.addToCart(id);
                                                                value.openModal(id)}
                                                                } 
                                            >
                                                {inCart ? "incart" : "add to cart"}
                                            </ButtonContainer>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
