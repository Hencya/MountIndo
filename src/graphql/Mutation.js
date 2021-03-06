// library
import { gql } from "@apollo/client";

export const INSERT_ARTICLE = gql`
  mutation MyMutation(
    $description: String!
    $author_name: String!
    $author_avatar: String!
    $image: String!
    $title: String!
    $created_at: String!
    $id_user: Int!
    $like: Int!
  ) {
    insert_MountIndo_Article(
      objects: {
        description: $description
        author_name: $author_name
        author_avatar: $author_avatar
        image: $image
        title: $title
        created_at: $created_at
        id_user: $id_user
        like: $like
      }
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_ARTICLE_LIKE = gql`
  mutation MyMutation($like: Int!, $id: Int!) {
    update_MountIndo_Article(
      where: { id: { _eq: $id } }
      _set: { like: $like }
    ) {
      affected_rows
    }
  }
`;

export const INSERT_TABLE_LIKE = gql`
  mutation MyMutation($id_user: Int!, $id_article: Int!) {
    insert_MountIndo_Like_one(
      object: { id_user: $id_user, id_article: $id_article }
    ) {
      id_user
      id_article
      id
    }
  }
`;

export const INSERT_TABLE_COMMENT = gql`
  mutation MyMutation(
    $author_avatar: String!
    $author_name: String!
    $commentar: String!
    $created_at: String!
    $id_article: Int!
    $id_user: Int!
  ) {
    insert_MountIndo_Comment_one(
      object: {
        author_avatar: $author_avatar
        author_name: $author_name
        commentar: $commentar
        created_at: $created_at
        id_article: $id_article
        id_user: $id_user
      }
    ) {
      id
      id_user
      id_article
      created_at
      commentar
      author_name
      author_avatar
    }
  }
`;

export const DELETE_TABLE_LIKE = gql`
  mutation MyMutation($id_article: Int!, $id_user: Int!) {
    delete_MountIndo_Like(
      where: {
        _and: { id_article: { _eq: $id_article }, id_user: { _eq: $id_user } }
      }
    ) {
      affected_rows
    }
  }
`;

export const DELETE_TABLE_COMMENT = gql`
  mutation MyMutation($id_article: Int!, $id_user: Int!, $id: Int!) {
    delete_MountIndo_Comment(
      where: {
        _and: {
          id_article: { _eq: $id_article }
          id_user: { _eq: $id_user }
          id: { _eq: $id }
        }
      }
    ) {
      affected_rows
    }
  }
`;

export const DELETE_ARTICLE_BY_USER_AND_ARTICLE_ID = gql`
  mutation MyMutation($id_user: Int!, $id: Int!) {
    delete_MountIndo_Article(
      where: { id_user: { _eq: $id_user }, id: { _eq: $id } }
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_ARTICLE_BY_USER_AND_ARTICLE_ID = gql`
  mutation MyMutation(
    $created_at: String!
    $description: String!
    $title: String!
    $image: String!
    $id_user: Int!
    $id: Int!
  ) {
    update_MountIndo_Article(
      where: { _and: { id_user: { _eq: $id_user }, id: { _eq: $id } } }
      _set: {
        created_at: $created_at
        description: $description
        title: $title
        image: $image
      }
    ) {
      affected_rows
    }
  }
`;
