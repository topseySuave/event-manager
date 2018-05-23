import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { validateSignInInput } from '../validateInput';
import InputForm from '../../form/formInput';
import { userSignInRequest } from '../../../actions/authActions';

/**
 * SignIn Class Component
 * */
class SignInForm extends React.Component {
  /**
   * Class contructor
   * @param { object } props
   * */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      errored: false,
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * handleChange method
   * @param { object } e
   * @returns { void }
   * */
  handleChange(e) {
    if (this.state.errors[e.target.name]) {
      let errors = Object.assign({}, !!this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  /**
   * isValid method
   * @returns { object }
   * */
  isValid() {
    const { errors, isValid } = validateSignInInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
   * handleSubmit method
   * @returns { object }
   * @param { object } e
   * */
  handleSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props
        .userSignInRequest(this.state)
        .then((res) => {
          if (res) {
            this.setState({
              isLoading: false
            });
          } else {
            // set error message to message from server
            this.setState({
              isLoading: false,
              errored: true,
              resMessage: 'Wrong email or password'
            });
          }
        })
        .catch(() => {
          // set error message to message from server
          this.setState({
            isLoading: false,
            errored: true,
            resMessage: 'Wrong email or password'
          });
        });
    }
  }

  /**
   * render method
   * @returns { Component }
   * */
  render() {
    const { isLoading, errors } = this.state;
    let loading = classNames('row', { isLoading });

    if (this.props.activeState.isAuthenticated) {
      return <Redirect to="/my-events" />;
    }

    return (
      <div>
        <div
          style={{ marginBottom: '20px' }}
          className={classNames('col', 's12', { hidden: !this.state.errored })}
        >
          <div className="card-panel red lighten-3">
            <span className="white-text">{this.state.resMessage}</span>
          </div>
        </div>

        <form className="col s12" id="signin-form" onSubmit={this.handleSubmit}>
          <div className={loading}>
            <div className="input-field col s12">
              <InputForm
                fieldId="email"
                nameField="email"
                value={this.state.email}
                error={errors.email || ''}
                type="email"
                onChange={this.handleChange}
                label="Email"
              />
            </div>
          </div>

          <div className={loading}>
            <div className="input-field col s12">
              <InputForm
                fieldId="password"
                nameField="password"
                value={this.state.password}
                error={errors.password || ''}
                type="password"
                onChange={this.handleChange}
                label="Password"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 center-align">
              <button
                className={
                  'btn col s12 white-text' +
                  ' gradient__bg btn-register waves-effect waves-light'
                }
                type="submit"
                name="action"
                disabled={isLoading ? 'disabled' : ''}
              >
                {!isLoading ? (
                  'Sign In'
                ) : (
                  <img
                    style={{ marginTop: '10px' }}
                    src="/image/loader/loading.gif"
                    alt="submit-loader"
                  />
                )}
              </button>
            </div>

            <p className="center-align">
              <span>
                Don't Have an Account? Sign Up{' '}
                <Link to="signup" href="signup">
                  here
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeState: state.authReducer
});

const matchDispatchToProps = dispatch =>
  bindActionCreators({ userSignInRequest }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(SignInForm);
