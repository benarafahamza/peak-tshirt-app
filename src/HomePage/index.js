import { Mail } from "@mui/icons-material";
import ThirtCard from "../TshirtCard";

import {
  AppBar,
  Badge,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export default function HomePage() {
  const [tshirts, setTshirts] = React.useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);

  /*React.useEffect(() => {
    async function fetchTshirts() {
      const response = await fetch("http://localhost:3001/tshirts");
      const tshirts = await response.json();
      setTshirts(tshirts);
    }
    fetchTshirts();
  }, []);
*/
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="h1">
            Peak Shirt
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        {tshirts.map((value) => (
          <Grid item xs={6} key={value}>
            <ThirtCard />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
