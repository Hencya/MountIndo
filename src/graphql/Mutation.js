import { gql } from "@apollo/client";

export const INSERT_ARTICLE = gql`
  mutation MyMutation(
    $description: String!
    $author_name: String!
    $author_avatar: String!
    $image: String!
    $title: String!
  ) {
    insert_MountIndo_Article(
      objects: {
        description: $description
        author_name: $author_name
        author_avatar: $author_avatar
        image: $image
        title: $title
      }
    ) {
      affected_rows
    }
  }
`;
