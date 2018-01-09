import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { validateSignUpInput } from '../validateInput';
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
            resMessage: '',
            isLoading: false,
            redirect: false,
            exists: false,
            signedUp: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if(!!this.state.errors[e.target.name]){
            let errors = Object.assign({}, !!this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            })
        }else{
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    isValid() {
        const { errors, isValid } = validateSignUpInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.isValid())
        {
            this.setState({
                errors: {},
                isLoading: true
            });

            this.props.userSignupRequest(this.state)
            .then((res) => {
                switch(res.data.statusCode){
                    case 201:
                        this.setState({
                            resMessage: res.data.message,
                            interval : 5,
                            isLoading: false,
                            signedUp: true
                        });

                        setInterval(()=>{
                            this.setState({interval: this.state.interval - 1});
                            if(this.state.interval === 0){
                                this.setState({redirect: true});
                            }
                        }, 1000);

                        break;
                    case 401:
                        this.setState({
                            serverRes: res.data,
                            error: res.data.message,
                            isLoading: false,
                            exists: true,
                            signedUp: false
                        });
                        break;
                    default:
                        this.setState({
                            serverRes: res.data,
                            error: 'Houston we have a problem...!',
                            isLoading: false,
                            signedUp: false
                        });
                        break;
                }
            })
            .catch((err)=>{
                Materialize.toast('Error in connection!!!', 5000, 'rounded', () => {
                    this.setState({
                        isLoading: false,
                    });
                });
            });
        }
    }

    render(){
        const {isLoading, errors, redirect, exists, interval} = this.state;
        let to = '/signin';
        if (redirect) {
            return <Redirect to={to} />;
        }

        let loading = classNames('row', {'isLoading': isLoading});
        return (
            <div>
                <div className={classNames('col', 's12', {'hidden': !this.state.signedUp})}>
                    <div className="card-panel teal lighten-3">
                        <h3 className="white-text" style={{marginTop: '0px'}}>You're Welcome!!!</h3>
                        <span className="white-text">{this.state.resMessage}</span>
                        <br />
                        <span className="white-text">Redirecting to signin in {interval} seconds</span>
                    </div>
                </div>

                <form className={classNames('col s12', {'hidden': this.state.signedUp})} id="reg-form" onSubmit={this.handleSubmit}>
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
                            error = {exists ? errors.message : errors.email || ''}
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
                                className="col s12 white-text btn waves-effect gradient__bg waves-light"
                                type="submit"
                                name="action"
                                disabled = { isLoading ? 'disabled' : '' }
                            >{ !isLoading ? "Register" : <img src="/image/loader/loading.gif"/> }</button>
                        </div>

                        <p className="center-align">
                            <span>Already signed Up? Login <Link to="signin">here</Link></span>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

SignUpForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
};

export default SignUpForm;