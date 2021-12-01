// library
import { useQuery } from "@apollo/client";
// graphql
import { GET_COMMENTS_BY_ARTICLE_ID } from "../graphql/Query";

export default function useGetCommentsByArticleId(id) {
  const {
    data: dataAllComments,
    loading: loadingAllComments,
    error: errorAllComments,
  } = useQuery(GET_COMMENTS_BY_ARTICLE_ID, {
    variables: { id_article: id },
    fetchPolicy: "network-only",
  });

  return { dataAllComments, loadingAllComments, errorAllComments };
}
