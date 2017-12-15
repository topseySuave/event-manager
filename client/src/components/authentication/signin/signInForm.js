import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { validateSignInInput } from '../validateInput';
import classNames from 'classnames'
import Helpers from '../../../helpers'
import InputForm from '../../form/formInput'

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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    isValid() {
        const { errors, isValid } = validateSignInInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.userSignInRequest(this.state)
                .then((res) => {
                    console.log(res.data);
                    // if(res.data.statusCode === 201){
                    //     this.setState({
                    //         serverRes: JSON.stringify(res.data),
                    //         redirect : true,
                    //         isLoading: false
                    //     });
                    // }else{
                    //     this.setState({ errors: res.data, isLoading: false })
                    // }
                });
        }
    }

    componentWillMount(){
        if(Helpers.equals(this.props.signedUpAction.action, 'signed-up')){
            this.setState({justSignedUp: true});
            this.justSignedUp = this.props.signedUpAction;
            console.log(this.justSignedUp);
        }
    }

    render(){
        const { isLoading, errors } = this.state;
        let loading = classNames('row', {'isLoading': isLoading});

        return (
            <div>
                <div className={classNames('col', 's12', {'hidden': !this.state.justSignedUp})}>
                    <div className="card-panel teal lighten-3">
                        <h3 className="white-text" style={{marginTop: '0px'}}>You're Welcome!!!</h3>
                        <span className="white-text">{JSON.parse(this.justSignedUp.obj).message}</span>
                        <br />
                        <span className="white-text">Please sign in and obtain your Token</span>
                    </div>
                </div>

                <form className="col s12" id="signin-form" onSubmit={this.handleSubmit}>
                    <div className={loading}>
                        <div className="input-field col s12">
                            <InputForm
                                fieldId = "email"
                                nameField = "email"
                                value = {this.state.email}
                                error = {errors.email || ''}
                                type="email"
                                onChange = {this.handleChange}
                                label = "Email"
                            />
                        </div>
                    </div>

                    <div className={loading}>
                        <div className="input-field col s12">
                            <InputForm
                                fieldId = "password"
                                nameField = "password"
                                value = {this.state.password}
                                error = {errors.password || ''}
                                type="password"
                                onChange = {this.handleChange}
                                label = "Password"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 center-align">
                            <button
                                className="btn col s12 gradient__bg btn-register waves-effect waves-light"
                                type="submit"
                                name="action"
                                disabled={ isLoading ? 'disabled' : '' }
                            >{ !isLoading ? "Sign In" : "signing in..." }</button>
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
    userSignInRequest: PropTypes.func,
    signedUpAction: PropTypes.object
};

export default SignInForm;