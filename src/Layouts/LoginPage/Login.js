import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './Login.css';
import Logo from './../../assets/img/brand-logo.png';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      accessToken: '',
      userId: '',
      name: '',
      email: '',
      picture: ''
    };
  }

  componentClicked = () => {
    console.log('clicked');
  };

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      accessToken: response.accessToken,
      userId: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
    console.log(this.state);
  };

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = '';
    } else {
      fbContent = (
        <FacebookLogin
          appId="440317406588918"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return (
      <div className="login">
        <div className="brand-logo">
          <img src={Logo} alt="" />
        </div>
        <form>
          <div className="login-control">
            <input type="text" name="" value="" placeholder="Username" />
          </div>
          <div className="login-control">
            <input type="text" name="" value="" placeholder="Password" />
          </div>
          <input type="button" className="btn-login" name="" value="SIGN IN" />
        </form>
        <div className="facebook-login">{fbContent}</div>
      </div>
    );
  }
}
