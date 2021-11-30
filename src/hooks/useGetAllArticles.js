import { useQuery } from "@apollo/client";
import { GET_ALL_ARTICLES } from "../graphql/Query";

export default function useGetAllArticles() {
  const {
    data: dataAllArticles,
    loading: loadingGetAllArticles,
    error: errorGetAllArticles,
  } = useQuery(GET_ALL_ARTICLES, { fetchPolicy: "network-only" });
  return { dataAllArticles, loadingGetAllArticles, errorGetAllArticles };
}
