import {ADD_ARTICLE, DELETE_ARTICLES,ADD_LIST_ARTICLES} from '../constants/ActionTypes'

export function addListArticles (Articles){
    return{
        type: ADD_LIST_ARTICLES,
        data: Articles
    }
}
export function addArticle (Article) {
    return {
        type: ADD_ARTICLE,
        data: {
            title: Article.title,
            description: Article.description,
            url: Article.url,
            tags: Article.tags
        }
    }
}

export function deleteArticle (id) {
    return{
        type: DELETE_ARTICLES,
        id: id
    }
}