// library
import { useQuery } from "@apollo/client";
// graphql
import { GET_USER } from "../graphql/Query";

export default function useGetUserById(id) {
  const {
    data: dataUser,
    loading: loadingGetUserById,
    error: errorGetUserById,
  } = useQuery(GET_USER, { variables: { id } });
  return {
    dataUser,
    loadingGetUserById,
    errorGetUserById,
  };
}
