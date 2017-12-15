import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import validateInput from './validateInput';
import InputForm from '../../form/formInput'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.userSignupRequest(this.state)
            .then((res) => {
                console.log(res.data);
                if(res.data.statusCode === 201){
                    this.setState({
                        serverRes: JSON.stringify(res.data),
                        redirect : true,
                        isLoading: false
                    });
                    this.context.router.concat({
                        state: this.state
                    })
                }else{
                    this.setState({ errors: res.data, isLoading: false })
                }
            });
        }
    }

    render(){
        const {isLoading, errors, redirect, serverRes} = this.state;
        let to = (serverRes != null)? `/signin?action=signed-up&obj=${serverRes}`: '/signin';
        if (redirect) {
            return <Redirect to={to} />;
        }
        let loading = classNames('row', {'isLoading': isLoading});
        return (
            <form className="col s12" id="reg-form" onSubmit={this.handleSubmit}>
                <div className={loading}>
                    <InputForm
                        fieldId = "first_name"
                        nameField = "firstName"
                        value = {this.state.firstName}
                        error = {errors.firstName || ''}
                        type="text"
                        onChange = {this.handleChange}
                        label = "First Name"
                    />
                </div>
                <div className={loading}>
                    <InputForm
                        fieldId = "last_name"
                        nameField = "lastName"
                        value = {this.state.lastName}
                        error = {errors.lastName || ''}
                        type="text"
                        onChange = {this.handleChange}
                        label = "Last Name"
                    />
                </div>
                <div className={loading}>
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
                <div className={loading}>
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
                <div className={loading}>
                    <InputForm
                        fieldId = "confirm_password"
                        nameField = "confirmPassword"
                        value = {this.state.confirmPassword}
                        error = {errors.confirmPassword || ''}
                        type="password"
                        onChange = {this.handleChange}
                        label = "Confirm Password"
                    />
                </div>
                <div className="row">
                    <div className="input-field col s12 center-align">
                        <button
                            className="col s12 btn waves-effect gradient__bg waves-light"
                            type="submit"
                            name="action"
                            disabled = { isLoading ? 'disabled' : '' }
                        >{ !isLoading ? "Register" : "Registering..." }</button>
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