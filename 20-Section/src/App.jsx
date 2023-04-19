import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> }, //the default page
            { path: 'products', element: <Products /> },
            { path: 'products/:productId', element: <ProductDetail /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
