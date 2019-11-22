import React from "react";
import ProductCard from "./ProductCard"
import productReducer from "../../store/reducers/productreducer";

const ProductList=({products})=> {
        return(
            
            <div>
                {products && products.map(product=>{
                    return(
                        <ProductCard product={product} key={product.id} />
                    )
                })}
            </div>
        )
    }


export default ProductList