import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/songs'
import {bindActionCreators} from 'redux'

class SongAdder extends Component {

    constructor(props){
        super(props)
        this.addSong = this.handleOnClickAddSong.bind(this)
    }

    handleOnClickAddSong(){
        let name = this.refs.name.value
        this.props.addSong({
            name:name,
            votes:0
        })
        this.refs.name.value = ''
    }

    render() {
        let songs = this.props.songs.map((song) => {
            return (<li key={song.name.trim()}>{song.name}</li>)
        })

        return (
            <div className="container">
                <input type="text" ref="name" />
                <input type="submit" onClick={this.addSong} />    
                <ul>
                    {songs}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SongAdder)