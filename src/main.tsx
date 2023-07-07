import React from "react";
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { Global } from '@emotion/react';
import {BodyStyles} from "./style";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Global styles={BodyStyles}/>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
