import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageHero } from './pages/PageHero.tsx'
import { PageError } from './pages/PageError.tsx'
import { PageRecipes } from './pages/PageRecipes.tsx'
import { PageBlogs } from './pages/PageBlogs.tsx'
import App from './App.tsx'
import './assets/index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const routerConfig = [
  {
    path: '/',
    element: <PageHero />,
    errorElement: <PageError errorCode={404} errorMessage='Not found' />,
    children: [
      {
        index: true,
        path: '/',
        element: <App />
      },
      {
        path: 'recipes',
        element: <PageRecipes />
      },
      {
        path: 'blog',
        element: <PageBlogs />
      },
      { 
        path: 'blog/:id',
        element: <PageBlogs />
      }
    ]
  }
];

const router = createBrowserRouter(routerConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
