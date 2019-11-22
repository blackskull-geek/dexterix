import React from "react"
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import {Link} from 'react-router-dom';

class GetStarted extends React.Component{
    render(){
        return(
            <div>
                <div>
                <Link to = '/signin'>
                <button class="btn waves-effect waves-light">SIGN IN</button>
                </Link>
                </div>
                <div>
                <Link to='/signup'>
                <button class="btn waves-effect waves-light">SIGN UP</button>
                </Link>
                </div>
            </div>
        )
    }
}

export default GetStarted;