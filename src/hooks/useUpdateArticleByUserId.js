// library
import { useMutation } from "@apollo/client";
import { UPDATE_ARTICLE_BY_USER_AND_ARTICLE_ID } from "../graphql/Mutation";

export default function useUpdateArticleByUserId() {
  const [
    updateArticleById,
    { loading: loadingUpdateArticleById, error: errorUpdateArticleById },
  ] = useMutation(UPDATE_ARTICLE_BY_USER_AND_ARTICLE_ID);
  return {
    updateArticleById,
    loadingUpdateArticleById,
    errorUpdateArticleById,
  };
}
