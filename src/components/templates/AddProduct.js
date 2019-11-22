import React from "react";
import {connect} from "react-redux"
import {createProduct} from '../../store/actions/productActions'

class AddProduct extends React.Component{

    state = {
        title: '',
        content: ''
      }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // this.props.AddProduct(this.state)
        this.props.createProduct(this.state)
      }

      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }

    render(){
        return(
            <div>
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5>Add a Product</h5>
                    <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Product Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Product Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Add</button>
          </div>
                </form>
            </div>
        )
    }
}

const mapDisptachToProps=(dispatch)=>{
    return{
        createProduct:(product)=>dispatch(createProduct(product))
    }
}

export default connect(null,mapDisptachToProps)(AddProduct);