import axios from "axios";

const request = axios.create({
  baseURL: "https://northcoders-news-bram-brooks.herokuapp.com/api"
});

// export const getArticles = () => {
//   return request
//     .get("/articles")
//     .then(articleData => {
//       return articleData.data.articles;
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

export const getArticles = topic => {
  return request.get("/articles", { params: { topic } }).then(articleData => {
    return articleData.data.articles;
  });
};

export const getTopics = () => {
  return request.get("/topics").then(topicData => {
    return topicData.data.topics;
  });
};

export const getArticleByArticleID = articleID => {
  return request.get(`/articles/${articleID}`).then(articleData => {
    return articleData.data.article;
  });
};
