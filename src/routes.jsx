import { createBrowserRouter } from "react-router";
import App from "./App";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import { Categories } from "./pages/Categories";
import { RecipeDetails } from "./pages/RecipeDetails";
import { CategroyRecipes } from "./pages/CategroyRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },

      {
        path: "recipes/:recipeId",
        element: <RecipeDetails />,
      },
      {
        path: "catogories",
        element: <Categories />,
        children: [
          {
            path: ":categoryId",
            element: <CategroyRecipes />,
          },
        ],
      },
    ],
  },
]);

export default router;
