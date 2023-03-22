import { Delete, ShoppingCartCheckout } from "@mui/icons-material";
import {
  Avatar,
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

const TotalPrice = ({ price }) => (
  <Typography>
    <strong>Total price </strong> <Price value={price} />
  </Typography>
);

TotalPrice.protoTypes = {
  price: number,
};

export default function CartPage() {
  return (
    <>
      <List>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src="" />
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={"Secondary text"}
          />
        </ListItem>
        ,
      </List>
      <BottomCallToActions secondary={<TotalPrice price={127} />}>
        <CtaButton startIcon={<ShoppingCartCheckout />} fullWidth>
          Purchase
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
