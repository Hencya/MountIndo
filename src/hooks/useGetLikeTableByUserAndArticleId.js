// library
import { useQuery } from "@apollo/client";
// graphql
import { GET_LIKE_TABLE_USER_AND_ARTICLE_ID } from "../graphql/Query";

export default function useGetLikeTableByUserAndArticleId(id_user, id_article) {
  const {
    data: dataGetTableLike,
    loading: loadingGetTableLike,
    error: errorGetTableLike,
  } = useQuery(GET_LIKE_TABLE_USER_AND_ARTICLE_ID, {
    variables: { id_article: id_article, id_user: id_user },
    fetchPolicy: "network-only",
  });
  return {
    dataGetTableLike,
    loadingGetTableLike,
    errorGetTableLike,
  };
}
