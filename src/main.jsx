
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { AuthProvider } from "./Context/AuthContext.jsx";



createRoot(document.getElementById('root')).render(
  
<StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
</StrictMode>

)
