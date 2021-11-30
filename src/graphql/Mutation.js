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
      }
    ) {
      affected_rows
    }
  }
`;
