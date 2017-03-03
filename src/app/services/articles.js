
export class articlesService {
    
    fetchArticles () {
      return fetch(`/api/articles/`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(reddit, json)))
    }
  
}