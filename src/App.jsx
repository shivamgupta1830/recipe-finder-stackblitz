import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import LandingPage from './pages/LandingPage';
import SearchResultsPage from './pages/SearchResultsPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/search',
        element: <SearchResultsPage />,
      },
      {
        path: 'recipe/:id',
        element: <RecipeDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
