import React, {Component} from "react";
import {Link} from "react-router";
export default class Signup extends Component {
    render() {
        return (
            <div>
                <h1>Join Short Lnk</h1>
                <Link to="/">Already have an account ? </Link>
            </div>
        );
    }
}