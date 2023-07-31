import './App.css';
import Login from './pages/Login/Login';
import Todooapp from './pages/Todooapp/Todooapp';
import SingUp from './pages/SingUp/SingUp';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/',
      element:<SingUp></SingUp>
    },
    {
      path: '/tareas/:nombre',
      element: <Todooapp></Todooapp>
    }
  ])

  return (
//el router Provider 
<RouterProvider router={router}></RouterProvider>
  );
}

export default App;
