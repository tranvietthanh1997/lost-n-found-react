import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
// reactstrap components
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';

class AdminNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'navbar-transparent'
    };
  }

  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: 'navbar-transparent'
      });
    } else {
      this.setState({
        color: 'bg-white'
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };

  render() {
    console.log(this.props.getuserData);
    return (
      <Fragment>
        <Navbar className={classNames('navbar-absolute', this.state.color)}
                expand="lg">
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classNames('navbar-toggle d-inline', {
                  toggled: this.props.sidebarOpened
                })}>
                <button className="navbar-toggler"
                        type="button"
                        onClick={this.props.toggleSidebar}>
                  <span className="navbar-toggler-bar bar1"/>
                  <span className="navbar-toggler-bar bar2"/>
                  <span className="navbar-toggler-bar bar3"/>
                </button>
              </div>
              <NavbarBrand href="#pablo"
                           onClick={e => e.preventDefault()}>
                {this.props.brandText}
              </NavbarBrand>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={this.toggleCollapse}>
              <span className="navbar-toggler-bar navbar-kebab"/>
              <span className="navbar-toggler-bar navbar-kebab"/>
              <span className="navbar-toggler-bar navbar-kebab"/>
            </button>
            <Collapse navbar
                      isOpen={this.state.collapseOpen}>
              <Nav className="ml-auto"
                   navbar>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    color="default"
                    nav
                  >

                    <i className="tim-icons icon-gift-2" />
                    <p className="d-lg-none">Exchange Gift</p>
                  </DropdownToggle>
                  <DropdownToggle caret
                                  color="default"
                                  data-toggle="dropdown"
                                  nav
                                  onClick={e => e.preventDefault()}>

                    <div className="photo">
                      <img alt="..."
                           src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"/>
                    </div>
                    <b className="caret d-none d-lg-block d-xl-block"/>
                    <p className="d-lg-none">Log out</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar"
                                right
                                tag="ul">
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">Log out</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className="separator d-lg-none"/>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default AdminNavbar;
