import React, { Component } from 'react';

class Article extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card grey lighten-4">
                        <div className="card-content">
                            <span className="card-title"><a href={this.props.url}>{this.props.title}</a></span>
                            <p>{this.props.description}</p>
                            <h6 className="right-align grey-text text-darken-1"><b><i>Anónimo</i></b></h6>
                        </div>
                        <div className="card-action">          
                            <a className="btn-floating waves-effect waves-light green"><i className="fa fa-pencil"></i></a>
                            <a className="btn-floating waves-effect waves-light red" onClick={this.props.deleteArticle}><i className="fa fa-times"></i></a>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;