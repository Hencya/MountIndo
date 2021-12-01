import { useMutation } from "@apollo/client";
import { UPDATE_ARTICLE_LIKE } from "../graphql/Mutation";

export default function useUpdateLike() {
  const [
    updateLikeArticle,
    { loading: loadingUpdateLikeArticle, error: errorUpdateLikeArticle },
  ] = useMutation(UPDATE_ARTICLE_LIKE);
  return {
    updateLikeArticle,
    loadingUpdateLikeArticle,
    errorUpdateLikeArticle,
  };
}
