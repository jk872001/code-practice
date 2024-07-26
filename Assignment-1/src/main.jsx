import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OtpPage from './pages/OtpPage.jsx';
import DragDropCards from './pages/DragDropCards.jsx';
import DataTable from './pages/DataTable.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // loader: rootLoader,
    children: [
      {
        path: "/otp-form",
        element: <OtpPage/>,
      },
      {
        path: "/course-list",
        element: <DragDropCards/>,
      },
      {
        path: "/batches",
        element: <DataTable/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
