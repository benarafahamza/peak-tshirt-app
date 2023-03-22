import { Divider, Paper } from "@mui/material";
import { margin } from "@mui/system";
import { node } from "prop-types";
/**
 * BttomCallToActions
 *
 * @param {*} props
 * @param ReactComponent propos.children
 * @param ReactComponent propos.secondary Texte secondaire, non obligatoire
 * @returns ReactComponent
 */

export default function BottomCallToActions({ children, secondary }) {
  return (
    <Paper
      elevation={3}
      square
      sx={{ padding: 2, position: "fixed", bottom: 0, width: "100vw" }}
    >
      {secondary}
      <Divider sx={{ margin: 2 }} />
      {children}
    </Paper>
  );
}

BottomCallToActions.protoType = {
  children: node,
  secondary: node,
};
