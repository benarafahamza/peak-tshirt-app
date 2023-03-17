import { useTshirts } from "core/hooks";
import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import ThirtCard from "../TshirtCard";
import StyleFilters from "StyleFilters";
import { useStyleFilters } from "core/contexts";

export default function HomePage() {
  const [selectedStyles] = useStyleFilters();
  const { isLoading, tshirts } = useTshirts(selectedStyles);
  return (
    <>
      <StyleFilters />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {tshirts.map((tshirt) => (
            <Grid item xs={6} key={tshirt.id}>
              <ThirtCard {...tshirt} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
