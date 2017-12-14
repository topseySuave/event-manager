import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import validateInput from './validateInput';
import InputForm from '../../form/formInput'
import { PropTypes } from '../../../../../node_modules/prop-types'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {},
            isLoading: false,
            redirect: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.userSignupRequest(this.state).then(
                this.setState({redirect : true}),
                (err) => this.setState({ errors: err.response.data, isLoading: false })
            );
        }
    }

    render(){
        const {errors, redirect} = this.state;
        if (redirect) {
            return <Redirect to='/signin' />;
        }
        return (
            <form className="col s12" id="reg-form" onSubmit={this.onSubmit}>
                <div className="row">
                    <InputForm
                        fieldId = "first_name"
                        nameField = "username"
                        value = {this.state.firstName}
                        error = {errors.firstName || ''}
                        type="text"
                        onChange = {this.onChange}
                        label = "First Name"
                    />
                </div>
                <div className="row">
                    <InputForm
                        fieldId = "last_name"
                        nameField = "lastName"
                        value = {this.state.lastName}
                        error = {errors.lastName || ''}
                        type="text"
                        onChange = {this.onChange}
                        label = "Last Name"
                    />
                </div>
                <div className="row">
                    <InputForm
                        fieldId = "email"
                        nameField = "email"
                        value = {this.state.email}
                        error = {errors.email || ''}
                        type="email"
                        onChange = {this.onChange}
                        label = "Email"
                    />
                </div>
                <div className="row">
                    <InputForm
                        fieldId = "password"
                        nameField = "password"
                        value = {this.state.password}
                        error = {errors.password || ''}
                        type="password"
                        onChange = {this.onChange}
                        label = "Password"
                    />
                </div>
                <div className="row">
                    <InputForm
                        fieldId = "confirm_password"
                        nameField = "confirmPassword"
                        value = {this.state.confirmPassword}
                        error = {errors.confirmPassword || ''}
                        type="password"
                        onChange = {this.onChange}
                        label = "Confirm Password"
                    />
                </div>
                <div className="row">
                    <div className="input-field col s12 center-align">
                        <button
                            className="col s12 btn waves-effect gradient__bg waves-light"
                            type="submit"
                            name="action"
                        >Register</button>
                    </div>

                    <p className="center-align">
                        <span>Already signed Up? Login <Link to="signin">here</Link></span>
                    </p>
                </div>
            </form>
        );
    }
}

SignUpForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
};

export default SignUpForm;