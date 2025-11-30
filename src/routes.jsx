import { createBrowserRouter } from "react-router";
import App from "./App";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import { Categories } from "./pages/Categories";

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
            }

        ]
        
    }
])

export default router;