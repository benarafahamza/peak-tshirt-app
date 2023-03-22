import TshirtCard from "TshirtCard";

import { useParams } from "react-router-dom";
import { useTshirt } from "core/hooks";
import { CircularProgress, Paper } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { CtaButton } from "ds/atoms";
import { BottomCallToActions } from "ds/molecules";

export default function TshirtPage() {
  const { tshirtId: id } = useParams();
  const { isLoading, tshirt } = useTshirt({ id });

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <TshirtCard {...tshirt} />

      <BottomCallToActions>
        <CtaButton startIcon={<AddShoppingCart />} fullWidth>
          Add To cart
        </CtaButton>
      </BottomCallToActions>
    </>
  );
}
