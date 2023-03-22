import { Button } from "@mui/material";

/**
 *
 * @example
 * <CtaButton startIcon={<AddShoppingCart />} fullWidth> Add To cart</ctaButton>
 */
export default function CtaButton({ children, fullWidth, startIcon }) {
  return (
    <Button
      variant="contained"
      color="success"
      size="large"
      startIcon={startIcon}
      fullWidth={fullWidth}
    >
      {children}
    </Button>
  );
}
