import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
// import About from './components/About';
import ContactUs from './components/ContactUs';
import Body from './components/Body';
import RestaurantsMenu from './components/RestaurantsMenu';
// import Grocery from './components/Grocery';

const Grocery = lazy(()=> import("./components/Grocery"))
const About = lazy(()=> import("./components/About"))


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>
      },
      {
        path:"/contactUS",
        element:<ContactUs/>
      },
      {
        path:"/restaurantsMenu/:resId",
        element:<RestaurantsMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement:<Error/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={appRouter}/>
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
