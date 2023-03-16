import { createTheme } from "@mui/material/styles";
import { grey, common } from "@mui/material/colors";

//TODO A tester
export default createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "sticky",
      },
      styleOverrides: {
        root: {
          backgroundColor: common.white,
          color: grey[900],
        },
      },
    },
  },
});
