import React from 'react';
import ProductList from '../templates/ProductList';
import {connect} from 'react-redux';

class Store extends React.Component{
   
    render(){
        
        console.log(this.props)
        const {products}=this.props
        console.log({products})
        return(
            <div>
                <ProductList products={products}/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
   return{
           products: state.product.products
    }
}

export default connect(mapStateToProps)(Store);