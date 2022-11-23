
import { RouterProvider } from 'react-router-dom';
import './App.css';

import Main from './Componen/Layout/Main';
import { routers } from './Componen/Router/Router';

function App() {

  return (
    <html>
     <RouterProvider router={routers}>
      
     </RouterProvider>
    </html>
  );
}

export default App;
