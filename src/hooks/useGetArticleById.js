// library
import { useQuery } from "@apollo/client";
// library
import { GET_ARTICLE_BY_ID } from "../graphql/Query";
import { SUBSCRIPTION_ARTICLES_LIKE } from "../graphql/Subscription";

export default function useGetArticleById(id) {
  const {
    data: dataGetArticleById,
    loading: loadingGetArticleById,
    error: errorGetArticleById,
    subscribeToMore,
  } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id },
    fetchPolicy: "network-only",
  });

  const subscribeLikes = () => {
    subscribeToMore({
      document: SUBSCRIPTION_ARTICLES_LIKE,
      variables: { id },
      updateQuery: (prev, { subscriptionData }) => {
        if (Object.keys(prev).length === 0 && prev.constructor === Object) {
          return;
        }
        return Object.assign({}, prev, {
          like: subscriptionData.data.MountIndo_Article_by_pk.like,
        });
      },
    });
  };

  return {
    dataGetArticleById,
    loadingGetArticleById,
    errorGetArticleById,
    subscribeLikes,
  };
}
