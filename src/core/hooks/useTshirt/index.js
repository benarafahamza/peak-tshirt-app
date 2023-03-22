import { useQuery } from "react-query";
import { tshirts } from "core/api";

export default function useTshirt(id) {
  const queryResponse = useQuery(["tshirts", id], tshirts.getOne(id));

  return { ...queryResponse, tshirt: queryResponse.data };
}
