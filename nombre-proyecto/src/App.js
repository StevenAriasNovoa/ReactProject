import './App.css';
import Login from './pages/Login/Login';
import Todooapp from './pages/Todooapp/Todooapp';
import SingUp from './pages/SingUp/SingUp';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: '/*',
      element:<SingUp></SingUp>
    },
    {
      path: '/inicio',
      element: <Login></Login>
    },
    {
      path: '/todooapp',
      element: <Todooapp></Todooapp>
    }
  ])
  return (
<RouterProvider router={router}></RouterProvider>
  );
}

export default App;
