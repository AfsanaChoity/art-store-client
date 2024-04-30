import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-tooltip/dist/react-tooltip.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Error from './components/Error';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddCraftItem from './PrivateRoute/AddCraftItem';
import MyArtCraftList from './PrivateRoute/MyArtCraftList';
import UpdateItem from './PrivateRoute/UpdateItem';
import ArtCraftItems from './components/ArtCraftItems';
import DetailsItem from './PrivateRoute/DetailsItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/addItem',
        element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyArtCraftList></MyArtCraftList></PrivateRoute>
      },
      {
        path: '/updateItem/:id',
        element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
      },
      {
        path: '/artCraftItems',
        element: <ArtCraftItems></ArtCraftItems>,
        loader: () => fetch(' https://art-store-server-a4n4s1zml-afsana-mimi-choitys-projects.vercel.app/artCraftItems')
      },
      {
        path: '/detailsItem/:id',
        element: <PrivateRoute><DetailsItem></DetailsItem></PrivateRoute>,
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
