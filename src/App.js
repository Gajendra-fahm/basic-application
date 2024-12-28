import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './Component/Pages/HomePage';

function App() {
  const router = createBrowserRouter([
    {
			path: "/",
			element: <HomePage />
		},
  ])

  return router;
} 

export default App;
