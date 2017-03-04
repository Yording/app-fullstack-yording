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

            // Antes de realizar el renderizado
            // realiza una petición a la B.D para traer todos
            // los articulos y actualizarlos en el state
          fetch('http://localhost:3000/api/articles')
            .then(response => {
                return response.json()
            })
            .then(articles => {
                // despacha la llenar la lista de articulos
                this.props.addListArticles(articles.articles)
            })
   }
   handleOnClickDeleteArticle(id,e){
        e.preventDefault();
        fetch(`http://localhost:3000/api/articles/${id}`,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.status
        })
        .then(status => {
            //Si la api devuelve un status 200 entonces despachamos la accion
            if(status == 200){
                this.props.deleteArticle(id)
            }
        })
        .catch(err => {
            console.log(err)
        })

   }
   handleOnClickAddArticle(e){

		e.preventDefault();

        //referencias de los campos
       let {title, description, url, tags}  = this.refs
       var form = {
           title: title.value,
           description: description.value,
           url: url.value,
           tags: tags.value
       }
       // Promise que insertar un articulo en la B.D
       // y luego de insertarlo lo devuelve en la promesa
       // para actualizar el state de articulos
       fetch('http://localhost:3000/api/articles',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
            })
            .then(response => {
                return response.json()
            })
            .then(article => {

                //Se despacha la acción
                this.props.addArticle(article.article)
            })
            .catch(err => {
                console.log(err)
            })
          

        // resetear formulario
        this.refs.formAddArticle.reset()
   }
   
    render() {
        let Articles;
        // Si hay más de un articulo los lista con el componente Articule
        // sino añade un card que informa no existen articulos
        if(this.props.articles.length > 0){
            Articles = this.props.articles.map((article) => {
                return(
                    <li key={article._id}> 
                        <Article 
                            url={article.url} 
                            title={article.title} 
                            description={article.description}
                            deleteArticle={this.handleOnClickDeleteArticle.bind(this,article._id)}
                        /> 
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