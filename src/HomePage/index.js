import { Mail } from "@mui/icons-material";
import { useTshirts } from "hooks";
import {
  AppBar,
  Badge,
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ThirtCard from "../TshirtCard";

export default function HomePage() {
  const { isLoading, tshirts } = useTshirts();
  return (
    <>
      <AppBar>
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
