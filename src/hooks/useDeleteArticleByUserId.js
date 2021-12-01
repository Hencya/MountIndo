// library
import { useMutation } from "@apollo/client";
// graphql
import { DELETE_ARTICLE_BY_USER_AND_ARTICLE_ID } from "../graphql/Mutation";
import { GET_ARTICLE_BY_USER_ID } from "../graphql/Query";

export default function useDeleteArticleByUserId() {
  const [
    deleteArticle,
    { loading: loadingDeleteArticle, error: errorDeleteArticle },
  ] = useMutation(DELETE_ARTICLE_BY_USER_AND_ARTICLE_ID, {
    refetchQueries: [GET_ARTICLE_BY_USER_ID],
    awaitRefetchQueries: true,
  });
  return {
    deleteArticle,
    loadingDeleteArticle,
    errorDeleteArticle,
  };
}
