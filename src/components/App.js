import { Button } from 'components/common';
import { createGlobalStyle } from 'styled-components';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
