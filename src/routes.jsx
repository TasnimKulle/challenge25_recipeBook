import { createBrowserRouter } from "react-router";
import App from "./App";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import { Categories } from "./pages/Categories";
import { RecipeDetails } from "./pages/RecipeDetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<NotFound/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'recipes',
                element:<Recipes/>
            },
            {
                path:'catogories',
                element:<Categories/>
            },
            {
                path:'recipes/:id',
                element:<RecipeDetails/>
            }
        ]
        
    }
])

export default router;