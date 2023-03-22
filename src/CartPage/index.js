import { Delete, ShoppingCartCheckout } from "@mui/icons-material";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { CtaButton } from "ds/atoms";
import { BottomCallToActions } from "ds/molecules";
import Price from "ds/atoms/Price";
import { number } from "prop-types";
import { useCart } from "core/contexts/CartContext";

const TotalPrice = ({ price }) => (
  <Typography>
    <strong>Total price </strong> <Price value={price} />
  </Typography>
);

TotalPrice.protoTypes = {
  price: number,
};

export default function CartPage() {
  const [{ cart, isCartEmpty }, { purchaseCart, removeFromCart }] = useCart();

  if (isCartEmpty) return <Typography>"Go shopping"</Typography>;
  return (
    <>
      <List>
        {cart.map(({ id, price, name, quantity, imageUrl }) => (
          <ListItem
            key={id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={removeFromCart(id)}
              >
                <Delete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar src={`/images/${imageUrl}`} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Grid container>
                  <Grid item>
                    <Typography>{name}</Typography>
                  </Grid>
                  {quantity > 1 && (
                    <Grid item sx={{ marginLeft: 1 }}>
                      <Typography variant="caption">(x{quantity})</Typography>
                    </Grid>
                  )}
                </Grid>
              }
              secondary={<Price value={price} />}
            />
          </ListItem>
        ))}
      </List>
      <BottomCallToActions secondary={<TotalPrice price={127} />}>
        <CtaButton
          startIcon={<ShoppingCartCheckout />}
          fullWidth
          onClick={purchaseCart}
        >
          Purchase
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
