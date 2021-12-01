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
