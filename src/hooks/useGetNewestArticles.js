import { useQuery } from "@apollo/client";
import { GET_NEWEST_ARTICLES } from "../graphql/Query";

export default function useGetNewestArticles() {
  const {
    data: dataNewestArticles,
    loading: loadingNewestArticles,
    error: errorNewestArticles,
  } = useQuery(GET_NEWEST_ARTICLES, { fetchPolicy: "network-only" });
  return { dataNewestArticles, loadingNewestArticles, errorNewestArticles };
}
