import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from '../screens/login';
import Success from '../screens/success';
import App from '../App';
import About from '../screens/about';



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<App />} />
        <Route path='login' element={<Login />} />
        <Route path='success' element={<Success />} />
        <Route path='about' element={<About />} />
        </>
    )
)

export default router