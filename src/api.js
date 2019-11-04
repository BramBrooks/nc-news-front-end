import axios from "axios";

const request = axios.create({
  baseURL: "https://northcoders-news-bram-brooks.herokuapp.com/api"
});

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

export const getCommentsByArticeID = articleID => {
  return request.get(`/articles/${articleID}/comments`).then(commentData => {
    return commentData.data.comments;
  });
};

export const postCommentByArticleID = (articleID, comment) => {
  return request
    .post(`/articles/${articleID}/comments`, comment)
    .then(postedCommentResponse => {
      return postedCommentResponse.data.comment;
    })
    .catch(err => {
      console.log(err, "<---- error");
    });
};

export const deleteCommentByCommentID = commentID => {
  return request.delete(`/comments/${commentID}`).catch(err => {
    console.log(err, "<---- error");
  });
};

// export const patchVotes = ArticleID => {
//   return request.patch(`/articles/${ArticleID}`).catch(err => {
//     console.log(err, "<------ error");
//   });
// };

// here what needs to happen?
// does this need a return value? Because as long as it updates the api, we'll get the data back when the component re-renders on mount?
