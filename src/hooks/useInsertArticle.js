import { useMutation } from "@apollo/client";
import { INSERT_ARTICLE } from "../graphql/Mutation";
import { GET_ARTICLE } from "../graphql/Query";

export default function useInsertArticle() {
  const [
    insertArticle,
    { loading: loadingInsertArticle, error: errorInsertArticle },
  ] = useMutation(INSERT_ARTICLE, {
    refetchQueries: [GET_ARTICLE],
    awaitRefetchQueries: true,
  });
  return { insertArticle, loadingInsertArticle, errorInsertArticle };
}
