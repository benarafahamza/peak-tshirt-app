import { Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Typography variant="h4">Oops!</Typography>
      <Typography>Sorry, an unxpected error has occured.</Typography>
      <Link to="/">Retour au meunu</Link>
      <Typography variant="body2">
        {error.statusText || error.message}
      </Typography>
    </>
  );
}
