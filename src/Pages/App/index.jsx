import { useState } from 'react'
import '../App/'
import './tailwind.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyArticle from '../MyArticle'
import MyArticles from '../MyArticles'
import MyProyect from '../MyProyect'
import MyProyects from '../MyProyects'
import NotFound  from '../NotFound'
import SigIn from '../SigIn'
import NavBar from "../../Components/NavBar"
import TapBar from "../../Components/TapBar"




function App() {
  const AppRouter=()=>{
    
      let routes=useRoutes([
      {path:'/', element:<Home/>},
      {path:'/My-account', element:<MyAccount/>},
      {path:'/My-article', element:<MyArticle/>},
      {path:'/My-articles', element:<MyArticles/>},
      {path:'/My-proyect', element:<MyProyect/>},
      {path:'/My-proyects', element:<MyProyects/>},
      {path:'/*', element:<NotFound/>},
      {path:'/sign-in', element:<SigIn/>}
      ])
      return routes
    }
  
  
    const [isMovile, setIsMovile] = useState(null)
  return (
    <BrowserRouter>
      <NavBar/> 
    {isMovile? <NavBar/> : <TapBar/> }
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
