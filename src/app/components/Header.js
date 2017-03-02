import React, { Component } from 'react';

class Header extends Component {

    render() {

        return (
            <div>
                <ul classID="dropdown1" className="dropdown-content">
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">three</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper blue darken-4">
                        <a href="#!" className="brand-logo">Logo</a>
                        <ul className="right hide-on-med-and-down">
                        <li><a href="/songs">Songs</a></li>
                        <li><a href="/articles">Articles</a></li>
                        <li><a className="dropdown-button" href="#!" ref="dropdown1">Yording <i className="fa fa-caret-down"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;