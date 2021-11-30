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
      id_article
      fullname
    }
  }
`;

export const GET_ARTICLE = gql`
  query MyQuery {
    MountIndo_Article {
      author_avatar
      author_name
      created_at
      description
      id
      id_comment
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
      id_article
      username
    }
  }
`;
