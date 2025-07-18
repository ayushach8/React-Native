import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./Component/Cart/Cart";
import Home from "./Component/HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <div className="h-[100vh] flex">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;