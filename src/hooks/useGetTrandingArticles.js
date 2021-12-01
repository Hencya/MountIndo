import { useQuery } from "@apollo/client";
import { GET_TRANDING_ARTICLES } from "../graphql/Query";

export default function useGetTrandingArticles() {
  const {
    data: dataGetTrandingArticles,
    loading: loadingGetTrandingArticles,
    error: errorGetTrandingArticles,
  } = useQuery(GET_TRANDING_ARTICLES, { fetchPolicy: "network-only" });
  return {
    dataGetTrandingArticles,
    loadingGetTrandingArticles,
    errorGetTrandingArticles,
  };
}
