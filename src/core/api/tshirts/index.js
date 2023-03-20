import config from "react-global-configuration";
import { responseToJson } from "core/utils";

const API_BASE_URL = config.get(
  "API_BASE_URL",
  process.env.REACT_APP_API_BASE_URL
);

export const tshirts = {
  getList: (selectedStyles) => () => {
    let tshirtRouteApi = `${API_BASE_URL}/tshirts`;

    if (selectedStyles.size > 0) {
      const queryString = new URLSearchParams(
        [...selectedStyles].map((s) => ["styleId", s])
      );
      tshirtRouteApi = tshirtRouteApi + "?" + queryString;
    }

    return fetch(tshirtRouteApi).then(responseToJson);
  },
};
