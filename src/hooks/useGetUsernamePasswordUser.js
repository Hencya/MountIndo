import { useLazyQuery } from "@apollo/client";
import { GetUsernameAndPassword } from "../graphql/Query";

export default function useGetUsernameAndPassword() {
  const [getUsernameAndPassword, { data, loading, error }] = useLazyQuery(
    GetUsernameAndPassword
  );
  return { getUsernameAndPassword, data, loading, error };
}
