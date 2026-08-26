import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router";
import Login from './pages/Login';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    // element:<div>Olá</div>
    element: <Login/>,
  },
  {
    // path: "/dashboard",
    // element: <Dashboard />,
  },
]);


// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
