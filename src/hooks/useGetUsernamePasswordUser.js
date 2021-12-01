// library
import { useLazyQuery } from "@apollo/client";
// graphql
import { LOGIN } from "../graphql/Query";

export default function useGetUsernameAndPassword() {
  const [getUsernameAndPassword, { data, loading, error }] =
    useLazyQuery(LOGIN);
  return { getUsernameAndPassword, data, loading, error };
}
