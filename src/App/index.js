import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { FilterProvider } from "core/contexts";
import { QueryClientProvider, QueryClient } from "react-query";

import HomePage from "../HomePage";
import theme from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TshirtPage from "TshirtPage";
import Layout from "Layout";
import ErrorPage from "ErrorPage";
import CartPage from "CartPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/tshirt/:tshirtId",
        element: <TshirtPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FilterProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </FilterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
