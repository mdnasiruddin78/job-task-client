import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/router';
import Authprovider from './Provider/Authprovider';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Authprovider>
          <RouterProvider router={router} />
        </Authprovider>
        <ToastContainer containerStyle={{ top: 60 }} toastOptions={{ position: "top-right" }} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode >
)
