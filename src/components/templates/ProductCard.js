import React from "react";

const ProductCard=({product})=>{
    console.log(product)
        return(
          <div className="center">
              <div className="card">
                <div className="card-image">
                  <img src={"https://via.placeholder.com/150"}/>
        <span className="card-title">{product.title}</span>
                </div>
                <div className="card-content">
        <p>{product.content}</p>
                </div>
                <div className="card-action">
                  <a href="#">CHECK IT OUT =></a>
                </div>
              </div>
            </div>
        )
                  }


export default ProductCard;