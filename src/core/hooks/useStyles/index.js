import { useQuery } from "react-query";

import { styles } from "core/api";

export default function useStyles() {
  const queryResponse = useQuery("styles", styles.getList());

  return { ...queryResponse, styles: queryResponse.data };
}
