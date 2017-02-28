import React, { Component } from 'react';
import {browserHistory, Router, Route} from 'react-router'
import SongAdder from './SongAdder'
import '../../assets/sass/styles.scss'

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