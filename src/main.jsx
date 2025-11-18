import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import Tour from './components/Tour/Tour.jsx'
import TourDetails from './components/TourDetails.jsx'
import Layout from './layout.jsx'
// @ts-ignore
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tour' element={<Tour/>}/>
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path='/contact' element={<Contact/>}/>
    </Route>
  )
)


// @ts-ignore
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
