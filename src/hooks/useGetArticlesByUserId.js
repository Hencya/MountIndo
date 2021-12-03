// library
import { useQuery } from "@apollo/client";
// graphql
import { GET_ARTICLE_BY_USER_ID } from "../graphql/Query";

export default function useGetArticlesByUserId(id) {
  const {
    data: dataArticlesByUserId,
    loading: loadingArticlesByUserId,
    error: errorArticlesByUserId,
  } = useQuery(GET_ARTICLE_BY_USER_ID, {
    variables: { id_user: id },
    fetchPolicy: "network-only",
  });
  return {
    dataArticlesByUserId,
    loadingArticlesByUserId,
    errorArticlesByUserId,
  };
}
