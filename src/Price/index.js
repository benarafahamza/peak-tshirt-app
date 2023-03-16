import { number, string } from "prop-types";

export default function Price({ value, currency = "EUR" }) {
  return new Intl.NumberFormat(navigator?.language || "fr", {
    style: "currency",
    currency,
  }).format(value);
}
Price.PropTypes = {
  value: number,
  currency: string,
};
