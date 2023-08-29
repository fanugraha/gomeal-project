import { MantineProvider } from "@mantine/core";
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/product page/ProductPage";
import { useRoutes } from "react-router";
import AuthPage from "./pages/auth page/AuthPage";
import ProtectedRoute from "./routes/ProtectedRoutes";

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Homepage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <ProductPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthPage />,
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
