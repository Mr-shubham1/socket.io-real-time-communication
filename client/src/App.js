import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";

const router = createBrowserRouter([
  {path:"/",
   element:<Homepage/>
  },{
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])

function App() {
  return (
    <div className="pt-12">
     <RouterProvider router={router}/>
    </div>
  ); 
}

export default App; 
