import React, { Component } from 'react';
import './UserPage.css';
import axios from 'axios';

class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state= {
            firstName: "",
            lastName: "",
            email: "",
            location: "",
            phoneNumber: "",
            userName: ""
        }
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    componentDidMount
}