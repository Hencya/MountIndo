// library
import { gql } from "@apollo/client";

export const SUBSCRIPTION_ARTICLES_LIKE = gql`
  subscription MySubscription($id: Int!) {
    MountIndo_Article_by_pk(id: $id) {
      like
    }
  }
`;
