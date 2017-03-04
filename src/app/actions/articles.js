import {ADD_ARTICLE, DELETE_ARTICLE,ADD_LIST_ARTICLES,EDIT_ARTICLE} from '../constants/ActionTypes'

export function addListArticles (Articles){
    return{
        type: ADD_LIST_ARTICLES,
        data: Articles
    }
}
export function addArticle (Article) {
    return {
        type: ADD_ARTICLE,
        data: Article
    }
}

export function editArticle (Article) {
    return {
        type: EDIT_ARTICLE,
        id: Article._id,
        data: Article
    }
}

export function deleteArticle (id) {
    return{
        type: DELETE_ARTICLE,
        id: id
    }
}