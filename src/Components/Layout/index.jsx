import { useContext } from 'react'
import { CaribiaContext } from '../../Context'

const Layout = ({children}) => {

  const context =useContext(CaribiaContext)

  return (
    <div className={`${context.darkMode ? 'bg-gray-800' : 'bg-white'}  flex flex-col ${window.innerWidth < 768 ? "mt-0 " :"mt-14"} items-center`}>  



  {children}  
    </div>
  )
}

export default Layout