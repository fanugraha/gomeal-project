import { MantineProvider } from "@mantine/core";
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/product page/ProductPage";
import { useRoutes } from "react-router";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
];

function App() {
  const element = useRoutes(routes);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {element}
    </MantineProvider>
  );
}

export default App;
