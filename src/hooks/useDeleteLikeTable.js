import { useMutation } from "@apollo/client";
import { DELETE_TABLE_LIKE } from "../graphql/Mutation";
import { GET_ALL_TABLE_LIKE } from "../graphql/Query";

export default function useDeleteLikeTable() {
  const [
    deleteTableLike,
    { loading: loadingDeleteTableLike, error: errorDeleteTableLike },
  ] = useMutation(DELETE_TABLE_LIKE, {
    refetchQueries: [GET_ALL_TABLE_LIKE],
    awaitRefetchQueries: true,
  });
  return { deleteTableLike, loadingDeleteTableLike, errorDeleteTableLike };
}
