import React, { Component } from 'react';
import path from 'path';
import {browserHistory, Router, Route} from 'react-router'
import SongAdder from '../components/SongAdder'
import '!style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap!../../assets/sass/styles.scss'



class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={SongAdder} />
            </Router>
        );
    }
}

export default App