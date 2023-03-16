import { useQuery } from "react-query";

export default function useTshirts() {
  const queryResponse = useQuery("tshirts", () =>
    fetch(
      "https://my-json-server.typicode.com/benarafahamza/peak-tshirt-app/tshirts"
    ).then((response) => response.json())
  );

  return { ...queryResponse, tshirts: queryResponse.data };
}
