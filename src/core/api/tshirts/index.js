import config from "react-global-configuration";
import { responseToJson } from "core/utils";

const API_BASE_URL = config.get(
  "API_BASE_URL",
  process.env.REACT_APP_API_BASE_URL
);

export const tshirts = {
  getList: (selectedStyles) => () => {
    const tshirtRoute = new URL("/tshirts", API_BASE_URL);
    const { searchParams } = tshirtRoute;
    selectedStyles.forEach((styleId) => {
      searchParams.append("styleId", styleId);
    });
    return fetch(tshirtRoute).then(responseToJson);
  },
};
