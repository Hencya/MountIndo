// library
import { useMutation } from "@apollo/client";
// graphql
import { INSERT_TABLE_COMMENT } from "../graphql/Mutation";
import { GET_ALL_TABLE_COMMENT } from "../graphql/Query";

export default function useInsertCommentTable() {
  const [
    insertTableComment,
    { loading: loadingInsertTableComment, error: errorInsertATableComment },
  ] = useMutation(INSERT_TABLE_COMMENT, {
    refetchQueries: [GET_ALL_TABLE_COMMENT],
    awaitRefetchQueries: true,
  });
  return {
    insertTableComment,
    loadingInsertTableComment,
    errorInsertATableComment,
  };
}
