
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App() {
  return (
    <div  data-theme="cupcake">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
