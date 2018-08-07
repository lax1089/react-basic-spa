import React, { Component } from 'react';

import { InputGroup, Input } from 'reactstrap';

class User extends Component {

    constructor(props) {
      super(props)

      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
      const { target } = event;
      const { name, value } = target;
      this.props.onFormFieldChange({ [name]: value });
    }

    render() {
        return (
        <div>
            <div className="jumbotron">
                <h1 className="display-3">User Component</h1>
            </div>
            <InputGroup>
                <Input 
                    placeholder="username" 
                    name = "username"
                    value = {this.props.username}
                    onChange = {this.handleChange}
                />
            </InputGroup>
            <br />
            <InputGroup>
                <Input 
                    type="email" 
                    placeholder="email"
                    name = "email" 
                    value = {this.props.email}
                    onChange = {this.handleChange}
                />
            </InputGroup>
            <br />
        </div>
        )
    }
}

export default User;