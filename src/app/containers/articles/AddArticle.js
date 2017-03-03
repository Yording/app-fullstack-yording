import React, { Component } from 'react';
import Article from '../../components/Article';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/articles';


class AddArticle extends Component {
   constructor(props){
       super(props)
       this.createArticle = this.handleOnClickAddArticle.bind(this);
   }

   componentDidMount(){
          fetch('http://localhost:3000/api/articles')
            .then(response => {
                return response.json()
            })
            .then(articles => {
                this.props.addListArticles(articles.articles)
            })
   }

   handleOnClickAddArticle(e){

		e.preventDefault();

       let {title, description, url, tags}  = this.refs
       var form = {
           title: title.value,
           description: description.value,
           url: url.value,
           tags: tags.value
       }

       fetch('http://localhost:3000/api/articles',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
            })
            .then(response => {
                console.log(response.status)
                if(response.status == 200){
                    this.props.addArticle(form)
                }
            })
            .catch(err => {
                console.log(err)
            })
          

        // resetear formulario
        this.refs.formAddArticle.reset()
   }
   
    render() {
        let Articles;
        if(this.props.articles.length > 0){
            Articles = this.props.articles.map((article) => {
                return(
                    <li key={article._id}> 
                        <Article url={article.url} title={article.title} description={article.description}/> 
                    </li>
                )
            })
        }
        else{
            Articles = <div className="card-panel grey darken-4 white-text">No existen Articulos para mostrar</div>
        }
        

        return (
            <div className="container">
                <ul>
                    {Articles}
                </ul>
                <form classID="formAddArticle" ref="formAddArticle" onSubmit={this.createArticle} method="POST">
                    <input type="text" ref="title" placeholder="Title"/>
                    <textarea  className="materialize-textarea" placeholder="description" ref="description"></textarea>
                    <input type="text" ref="url" placeholder="URL"/>
                    <input type="text" ref="tags" placeholder="Tags"/>
                    <button type="submit" className="btn">Add Article</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        articles: state.articles
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(AddArticle)