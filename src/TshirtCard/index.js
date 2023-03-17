import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

import Price from "Price";

import { string, number, oneOf } from "prop-types";
import { Link } from "react-router-dom";

export default function TshirtCard({
  id,
  name,
  imageUrl,
  description,
  size,
  price,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea LinkComponent={Link} to={`/tshirt/${id}`}>
        <CardMedia
          component="img"
          height="140"
          image={`/images/${imageUrl}`}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Chip label={`Taille : ${size}`} size="small" />
            </Grid>
            <Grid item>
              <Typography>
                <Price value={price} />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions />
    </Card>
  );
}

TshirtCard.propTypes = {
  id: number,
  name: string,
  imageUrl: string,
  description: string,
  size: oneOf(["S", "M", "L", "XL"]),
  price: number,
};
