import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card';
import Product from './Products.module.css'
 class Products extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         products:[],
      }
    }
    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
        .then(response =>this.setState({
            products:response.data,
        }))
    }
    
  render() {
    const { products} = this.state; 
    return (
      <div className={Product.container}>
        {products.map(product =><Card key={product.id} image={product.image} dis={product.title} badget={`${product.price}` }/>)}
      </div>
    )
  }
}
export default Products;
