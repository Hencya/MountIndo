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
