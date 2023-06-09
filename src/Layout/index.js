import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useCart } from "core/contexts/CartContext";
import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Layout() {
  const [{ isCartEmpty, cartItemsQuantity }] = useCart();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" component="h1">
              Peak Shirt
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              LinkComponent={Link}
              to="/cart"
            >
              <Badge badgeContent={cartItemsQuantity} color="primary">
                {isCartEmpty ? <ShoppingCartOutlined /> : <ShoppingCart />}
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
