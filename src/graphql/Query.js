// library
import { gql } from "@apollo/client";

export const LOGIN = gql`
  query MyQuery($username: String!, $password: String!) {
    MountIndo_User(
      where: {
        _and: { username: { _eq: $username }, password: { _eq: $password } }
      }
    ) {
      avatar
      id
      username
      fullname
    }
  }
`;

export const GET_ALL_ARTICLES = gql`
  query MyQuery {
    MountIndo_Article {
      author_avatar
      author_name
      created_at
      description
      id
      id_user
      image
      like
      title
    }
  }
`;

export const GET_USER = gql`
  query MyQuery($id: Int!) {
    MountIndo_User_by_pk(id: $id) {
      avatar
      fullname
      id
      username
    }
  }
`;

export const GET_ARTICLE_BY_ID = gql`
  query MyQuery($id: Int!) {
    MountIndo_Article_by_pk(id: $id) {
      author_avatar
      author_name
      created_at
      description
      id
      id_user
      image
      like
      comment
      title
    }
  }
`;

export const GET_NEWEST_ARTICLES = gql`
  query MyQuery {
    MountIndo_Article(order_by: { created_at: desc }, limit: 5) {
      created_at
      description
      id
      image
      title
    }
  }
`;

export const GET_COMMENTS_BY_ARTICLE_ID = gql`
  query MyQuery($id_article: Int!) {
    MountIndo_Comment(where: { id_article: { _eq: $id_article } }) {
      commentar
      created_at
      id
      id_article
      id_user
      author_avatar
      author_name
    }
  }
`;

export const GET_ARTICLE_BY_USER_ID = gql`
  query MyQuery($id_user: Int!) {
    MountIndo_Article(where: { id_user: { _eq: $id_user } }) {
      author_avatar
      author_name
      created_at
      description
      id
      id_user
      image
      like
      title
    }
  }
`;

export const GET_LIKE_TABLE_USER_AND_ARTICLE_ID = gql`
  query MyQuery($id_article: Int!, $id_user: Int!) {
    MountIndo_Like(
      where: { id_article: { _eq: $id_article }, id_user: { _eq: $id_user } }
    ) {
      id
      id_article
      id_user
    }
  }
`;

export const GET_ALL_TABLE_LIKE = gql`
  query MyQuery {
    MountIndo_Like {
      id
      id_article
      id_user
    }
  }
`;

export const GET_ALL_TABLE_COMMENT = gql`
  query MyQuery {
    MountIndo_Comment {
      author_avatar
      author_name
      commentar
      created_at
      id
      id_article
      id_user
    }
  }
`;

export const GET_TRANDING_ARTICLES = gql`
  query MyQuery {
    MountIndo_Article(limit: 3, order_by: { like: desc }) {
      title
      author_avatar
      author_name
      created_at
      description
      id
      id_user
      image
      like
      comment
    }
  }
`;
