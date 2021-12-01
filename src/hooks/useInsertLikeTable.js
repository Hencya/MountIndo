import { useMutation } from "@apollo/client";

import { INSERT_TABLE_LIKE } from "../graphql/Mutation";
import { GET_ALL_TABLE_LIKE } from "../graphql/Query";

export default function useInsertLikeTable() {
  const [
    insertTableLike,
    { loading: loadingInsertTableLike, error: errorInsertATableLike },
  ] = useMutation(INSERT_TABLE_LIKE, {
    refetchQueries: [GET_ALL_TABLE_LIKE],
    awaitRefetchQueries: true,
  });
  return { insertTableLike, loadingInsertTableLike, errorInsertATableLike };
}
