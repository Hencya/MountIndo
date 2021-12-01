// library
import { useSubscription } from "@apollo/client";
import { SUBSCRIPTION_ARTICLES_LIKE } from "../graphql/Subscription";

export default function useLikeSubccription(id) {
  const {
    data: dataLikeSubs,
    loading: loadingLikeSubs,
    error: errorLikeSubs,
  } = useSubscription(SUBSCRIPTION_ARTICLES_LIKE, { variables: { id } });
  return { dataLikeSubs, loadingLikeSubs, errorLikeSubs };
}
