import { Chip, CircularProgress, Stack } from "@mui/material";
import { useStyleFilters } from "core/contexts/FilterContext";

import { useStyles } from "core/hooks";
import React from "react";

export default function StyleFilters() {
  const { isLoading, styles } = useStyles();

  const [selectedStyles, { selectFilter }] = useStyleFilters();

  if (isLoading) return <CircularProgress />;

  return (
    <Stack
      direction="row"
      spacing={2}
      component="ul"
      sx={{ margin: 0, padding: 2 }}
    >
      {styles.map(({ id, name }) => (
        <Chip
          onClick={selectFilter(id)}
          variant="outlined"
          component="li"
          key={id}
          label={name}
          color={selectedStyles.has(id) ? "primary" : "default"}
        />
      ))}
    </Stack>
  );
}
