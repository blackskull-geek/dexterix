import React from "react";

class ProductDetail extends React.Component{
render(){
    console.log(this.props)
    let id = this.props.match.params.id
    console.log(id)
    return(
        <div>
            DETAIL OF PRODUCT {id}
            NAME OF PRODUCT
            IMAGE OF PRODUCT
            <a class="waves-effect waves-light btn">RENT NOW</a>
        </div>
    )
}
}

export default ProductDetail;