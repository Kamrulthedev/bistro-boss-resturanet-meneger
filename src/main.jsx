import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Laout/Roots'
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './providers/AuthProviders'
import {
  QueryClient,
  QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
        <div className='max-w-screen-xl	 mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </HelmetProvider>
    </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
