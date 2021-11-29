import { gql } from "@apollo/client";

const GetUsernameAndPassword = gql`
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

export { GetUsernameAndPassword };
