import React, { Component } from 'react';
import '../styles/App.css';

import Home from './HomeComponent';
import About from './AboutComponent';
import User from './UserComponent';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      isOpen: false,
      email: '',
      username: '',
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  
  render() {
    return (
      <Router>
        <div>

          <Navbar color="light-grey" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-2" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>
                      <Link to="/about">Option 1</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/user">Option 2</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to="/home">Home</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>

          <div className="container">
            <br />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route 
                path="/user" 
                render={props => 
                  <User 
                    username={this.state.username}
                    email={this.state.email}
                    onFormFieldChange={(field) => console.log('App:onFormFieldChange', field) || this.setState(field)}
                  />
                } 
              />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
