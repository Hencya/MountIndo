// library
import { useMutation } from "@apollo/client";
// graphql
import { INSERT_ARTICLE } from "../graphql/Mutation";
import { GET_ALL_ARTICLES } from "../graphql/Query";

export default function useInsertArticle() {
  const [
    insertArticle,
    { loading: loadingInsertArticle, error: errorInsertArticle },
  ] = useMutation(INSERT_ARTICLE, {
    refetchQueries: [GET_ALL_ARTICLES],
    awaitRefetchQueries: true,
  });
  return { insertArticle, loadingInsertArticle, errorInsertArticle };
}
