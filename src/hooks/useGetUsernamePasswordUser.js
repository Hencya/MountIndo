import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../graphql/Query";

export default function useGetUsernameAndPassword() {
  const [getUsernameAndPassword, { data, loading, error }] =
    useLazyQuery(LOGIN);
  return { getUsernameAndPassword, data, loading, error };
}
