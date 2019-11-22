import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="nav-wrapper grey darken-3">
                    <div className="container">
                        <ul className="right">
                        <li><a>Add Product</a></li>
                        <li><a>Log Out</a></li>
                        <li><a>MU</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar