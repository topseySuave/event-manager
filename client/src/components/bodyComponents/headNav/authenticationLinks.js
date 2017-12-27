import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthenticationLinks extends Component {

    //initialize constructor
    constructor(props){
        super(props);
        //initialize state
        this.state = {
            isAuthenticated: false
        }
    }

    componentWillMount(){
        //check if user is signed in with jwt Token
        if(localStorage.getItem('jwtToken')){
            //Change state to set isAuthenticated true
            this.setState({isAuthenticated: true});
        }
    }

    showAuthenticationLinks(){
        // Show Sign-in and Sign-up
        // links only if user isn't signed in
        if(this.state.isAuthenticated){
            return (
                <div>
                    <li><Link to="signin">Sign In</Link></li>
                    <li><Link to="signup">Sign Up</Link></li>
                </div>
            )
        }else{
            return (
                <li><a href="#" onClick={() => this.props.signOut}>Sign Out</a></li>
            )
        }
    }

    showSignUpActionButton(){
        if(this.state.isAuthenticated){
            return (
                <Link to="signup" className="btn blue lighten-2 waves-effect animated fadeInLeft">Join Boots Events Manager</Link>
            );
        }
    }
}
//
// const matchDispatchToProps = (dispatch) => {
//     return bindActionCreators({signOut: signOutRequest}, dispatch);
// };
//
// export default connect(null, {matchDispatchToProps})(AuthenticationLinks);