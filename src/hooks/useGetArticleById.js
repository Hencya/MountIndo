import { useQuery } from "@apollo/client";
import { GET_ARTICLE_BY_ID } from "../graphql/Query";

export default function useGetArticleById(id) {
  const {
    data: dataGetArticleById,
    loading: loadingGetArticleById,
    error: errorGetArticleById,
  } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id },
    fetchPolicy: "network-only",
  });

  return { dataGetArticleById, loadingGetArticleById, errorGetArticleById };
}
