import { createContext, useState } from "react"

export const CaribiaContext =createContext()  


export const CaribiaProvider =({children})=>{  

    const [darkMode, setdarkMode] = useState(false)
    return(

        <CaribiaContext.Provider value={{    
            darkMode, setdarkMode,  
        }}>
            {children}
        </CaribiaContext.Provider>    

    )
}