import React, {Component} from "react";
import {Link} from "react-router";

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login to Short Link</h1>
                <Link to="/signup"> Have an Account? </Link>
            </div>
        );
    }
}

