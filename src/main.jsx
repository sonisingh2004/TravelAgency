import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// import Layout from './layout.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//         {/* <Route path='' element={<Home/>}/> */}
//         {/* <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/user/:id' element={<User/>}/>
//         <Route path='/github' element={<Github/>}/> */}
//     </Route>
//   )
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
