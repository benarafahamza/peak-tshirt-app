import { useQuery } from "react-query";

import { tshirts } from "core/api";

export default function useTshirts() {
  const queryResponse = useQuery("tshirts", tshirts.getList());

  return { ...queryResponse, tshirts: queryResponse.data };
}
