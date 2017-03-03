import React, { Component } from 'react';

class Article extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card-panel grey lighten-4">
                        <h1><a href={this.props.url}>{this.props.title}</a></h1>
                        <p>{this.props.description}</p>
                        <h6 className="right-align grey-text text-darken-1"><b><i>Anónimo</i></b></h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;