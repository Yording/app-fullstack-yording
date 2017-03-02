import React, { Component } from 'react';
import {browserHistory, Router, Route} from 'react-router'
import Header from '../components/Header'
import SongAdder from '../components/SongAdder'

import $ from 'jquery';
import 'materialize-css';
import '!style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap!../../assets/sass/styles.scss'



class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router history={browserHistory}>
                    <Route path="/songs" component={SongAdder} />
                </Router>
            </div>
        );
    }
}

export default App