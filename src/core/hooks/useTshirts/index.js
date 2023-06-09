import { useQuery } from "react-query";

import { tshirts } from "core/api";

export default function useTshirts(selectedStyles) {
  const queryResponse = useQuery(
    ["tshirts", [...selectedStyles]],
    tshirts.getList(selectedStyles)
  );

  return { ...queryResponse, tshirts: queryResponse.data };
}
