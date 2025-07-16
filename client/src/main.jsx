import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from './app/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <App />
    <ToastContainer/> 
    </Provider>


)
