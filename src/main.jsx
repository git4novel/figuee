import ReactDOM from 'react-dom/client'
import './index.css'
import './app.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1296px] container mx-auto'>
    <RouterProvider router={router} />
  </div>,
)
