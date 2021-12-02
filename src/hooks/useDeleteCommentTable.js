// library
import { useMutation } from "@apollo/client";
// graphql
import { DELETE_TABLE_COMMENT } from "../graphql/Mutation";
import { GET_ALL_TABLE_COMMENT } from "../graphql/Query";

export default function useDeleteCommentTable() {
  const [
    deleteTableComment,
    { loading: loadingDeleteTableComment, error: errorDeleteTableComment },
  ] = useMutation(DELETE_TABLE_COMMENT, {
    refetchQueries: [GET_ALL_TABLE_COMMENT],
    awaitRefetchQueries: true,
  });
  return {
    deleteTableComment,
    loadingDeleteTableComment,
    errorDeleteTableComment,
  };
}
