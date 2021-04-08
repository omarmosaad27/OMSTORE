import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0,


    }
    componentDidMount(){
        this.setProducts()
    }
    setProducts = () =>{
        let products = []
        storeProducts.forEach(item=>{
            const singleItem = {...item}
            products = [...products , singleItem]
        })
        this.setState(()=>{
            return {products}
        })
    }
    // get detail depend on id of the product
    getItem = (id) =>{
        const product = this.state.products.find((item) => item.id === id)
        return product
    }

    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    }
    addToCart = (id) =>{
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart= true;
        product.count = 1;
        const price = product.price;
        product.total = price
        this.setState(()=>{
          return {
            product:tempProducts,
            cart:[...this.state.cart,product]

          }
        },()=>{
          this.addTotals()
        })
    }
    openModal = (id) => {
      const product = this.getItem(id)
      this.setState(()=>{
        return {modalProduct:product,modalOpen:true}
      })
    }
    closeModal = () =>{
      this.setState(()=>{
        return {modalOpen:false}
      })
    }
    increment = (id) =>{
      let tempCart = [...this.state.cart]
      const selectedProduct = tempCart.find((item)=>item.id===id)
      const index = tempCart.indexOf(selectedProduct)
      const product = tempCart[index]
      product.count = product.count + 1;
      product.total = product.count * product.price
      this.setState(()=>{
        return{
          cart:[...tempCart]
        }
      },()=>{
        this.addTotals()
      })
    }
    decrement = (id) =>{
      let tempCart = [...this.state.cart]
      const selectedProduct = tempCart.find((item)=>item.id === id)
      const index = tempCart.indexOf(selectedProduct)
      const product = tempCart[index]
      product.count = product.count - 1;
      if(product.count === 0){
        this.removeItem();
      }else{
        product.total = product.count * product.price
        this.setState(()=>{
          return{
            cart:[...tempCart]
          }
        },()=>{
          this.addTotals()
        })
      }
    }
    removeItem =  (id) => {
      let tempProducts = [...this.state.products]
      let tempCart = [...this.state.cart]
      tempCart = tempCart.filter((item)=> item.id !== id)
      const index = tempProducts.indexOf(this.getItem(id))
      let removedProduct = tempProducts[index] 
      removedProduct.inCart = false;
      removedProduct.count = 0;
      removedProduct.total = 0;
      this.setState(()=>{
        return{
          cart:[...tempCart],
          product:[...tempProducts]

        }
      },()=>{
        this.addTotals()
      })
    }
    clearCart = () =>{
      this.setState(()=>{
        return {cart:[]}
      },()=>{
        this.setProducts();
        this.addTotals()
      })
    }
    addTotals = () =>{
      let subTotal = 0
      this.state.cart.map((item)=> {
        subTotal += item.total
      });
      const temptax = subTotal * 0.1;
      const tax = parseFloat(temptax.toFixed(2))
      const total = subTotal + tax;
      this.setState(()=>{
        return {
          cartSubtotal:subTotal,
          cartTax:tax,
          cartTotal:total,
        
        
        }
      })
    }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal:this.openModal,
          closeModal:this.closeModal,
          inCrement:this.increment,
          deCrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart,

          
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };