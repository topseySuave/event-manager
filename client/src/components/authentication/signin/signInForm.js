import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import Helpers from '../../../helpers'

class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
            isLoading: false,
            redirect: false,
            justSignedUp: false
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        if(Helpers.equals(this.props.signedUpAction.action, 'signed-up')){
            this.setState({justSignedUp: true});
            this.justSignedUp = this.props.signedUpAction;
            console.log(this.justSignedUp);
        }
    }

    render(){
        return (
            <div>
                <div className={classNames('col', 's12', {'hidden': this.state.justSignedUp})}>
                    <div className="card-panel teal lighten-3">
                        <h3>You're Welcome!!!</h3>
                        <span className="teal-text darken-3">{JSON.parse(this.justSignedUp.obj).message}</span>
                        <br />
                        <span className="teal-text darken-3">Please sign in and obtain your Token</span>
                    </div>
                </div>

                <form className="col s12" id="signin-form">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" required />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" minLength="5" required />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 center-align">
                            <button className="btn col s12 gradient__bg btn-register waves-effect waves-light" type="submit" name="action">Sign In</button>
                        </div>
                        <p className="center-align">
                            <span>Don't Have an Account? Sign Up <Link to="signup">here</Link></span>
                        </p>
                    </div>

                </form>
            </div>
        )
    }
}

SignInForm.propTypes = {
    signedUpAction: PropTypes.object
};

export default SignInForm;