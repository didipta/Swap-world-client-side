
import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Componen/Context/Authprovider';
import { routers } from './Componen/Router/Router';

function App() {
  const { theme,setTheme}=useContext(AuthContext);
 
  return (
    <html data-theme={theme?"night":"light"}>
     <RouterProvider router={routers}>
      
     </RouterProvider>
    </html>
  );
}

export default App;
