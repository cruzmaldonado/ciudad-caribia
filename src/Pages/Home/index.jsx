import React from 'react'


const Home = () => {
  return (
    <section className="w-full h-screen">
       
       <div className="" id="home">
            <div className="w-full h-3/4">
                <div className="w-full h-full flex flex-col absolute space-y-72 py-4 items-center mt-6 lg:space-y-0 lg:items-start lg:pt-48 lg:justify-start">

                    <input className=" outline-none  p-1 rounded-full text-center shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden" type="search"  placeholder="Ciudad Caribia"/>
                  
                    <div className="hidden h-auto lg:w-2/3 lg:flex pb-6">
                        <p className=" text-4xl ml-16 font-bold text-white">Ciudad Caribia Distrito Motor de desarrollo.</p>
                    </div>
                    <button className="bg-white shadow-lg w-36 block mx-auto rounded-full p-4 text-lg font-semibold text-primary  shadow-gray-700/50  transition duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16">EXPLORAR</button>
                   
                </div>

               
                <div className="w-full h-full ">
                   
    
                    <div className="h-120 w-full bg-imgPortada bg-cover bg-center " src='../../img/sanFrancisco.jpg' alt="sanFrancisco"/>
                    
                </div>
               
            </div>  
        </div>



        <div  className="w-full h-auto" id="recomendados">
            <p className="text-3xl font-semibold text-primary dark:text-white pl-6 pt-6">Recomendados</p>
           
           <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-contain flex space-x-4 overflow-y-hidden p-6">
            <div className="Card">
                <div className="w-full h-3/5 rounded-t-lg bg-img1 bg-cover"></div>
                <div className="w-full h-2/5 bg-secondary rounded-b-lg  dark:bg-gray-700">
                    
                    <p className="text-white font-semibold  text- px-4 py-2  ">Ciudad Caribia</p>
                    <p className="text-white text-md px-4 ">Paisajes increibles</p>
                    
                </div>

                
            </div> 
            <div className="Card">
                <div className="w-full h-3/5 rounded-t-lg bg-img2 bg-cover"></div>
                <div className="w-full h-2/5 bg-white  rounded-b-lg dark:bg-gray-800">
                    
                    <p className="text-tertiary font-semibold   px-4 py-2 dark:text-white">Rutas para bicicletas</p>
                    <p className="text-tertiary text-md px-4 dark:text-white">ideales para ciclistas</p>
                    
                </div>
            </div>

            <div className="Card">
                <div className="w-full h-3/5 rounded-t-lg bg-img3 bg-cover"></div>
                <div className="w-full h-2/5 bg-secondary rounded-b-lg  dark:bg-gray-700">
                    
                    <p className="text-white font-semibold  text- px-4 py-2 ">Arboles y arbusto en toda la ciudad</p>
                    <p className="text-white text-md px-4 ">Vive en armonia.</p>
                    
                </div>
            </div>

            <div className="Card">
                <div className="w-full h-3/5 rounded-t-lg bg-img4 bg-cover"></div>
                <div className="w-full h-2/5 bg-white rounded-b-lg dark:bg-gray-800">
                    
                    <p className="text-tertiary font-semibold  text- px-4 py-2 dark:text-white">seguridad ante todo</p>
                    <p className="text-tertiary text-md px-4 dark:text-white">Descubre nuestra seguridad</p>
                    
                </div>
            </div>

            <div className="Card">
                <div className="w-full h-3/5 rounded-t-lg bg-img5 bg-cover"></div>
                <div className="w-full h-2/5 bg-secondary rounded-b-lg  dark:bg-gray-700">
                    
                    <p className="text-white font-semibold  text- px-4 py-2 ">Flora paradisiaca</p>
                    <p className="text-white text-md px-4 ">vive la naturaleza  </p>
                    
                </div>
            </div>

            <div className="Card">
                <div className="w-full h-3/5 rounded-t-lg bg-img6 bg-cover"></div>
                <div className="w-full h-2/5 bg-white rounded-b-lg dark:bg-gray-800">
                    
                    <p className="text-tertiary font-semibold  text- px-4 py-2 dark:text-white">Contruyendo el futuro</p>
                    <p className="text-tertiary text-md px-4 dark:text-white">Nuevas Obras</p>
                    
                </div>
            </div>  
            <div className="Card">
                <div className="w-full h-3/5 rounded-t-lg bg-img7 bg-cover"></div>
                <div className="w-full h-2/5 bg-secondary rounded-b-lg dark:bg-gray-700">
                    
                    <p className="text-white font-semibold  text- px-4 py-2 ">sorprendente</p>
                    <p className="text-white text-md px-4 ">Descubre algo nuevo cada día. </p>
                    
                </div>
            </div> 
            <div className="Card">
                <div className="w-full h-3/5 rounded-t-lg bg-img2 bg-cover"></div>
                <div className="w-full h-2/5 bg-white  rounded-b-lg dark:bg-gray-800">
                    
                    <p className="text-tertiary font-semibold   px-4 py-2 dark:text-white">Rutas para bicicletas</p>
                    <p className="text-tertiary text-md px-4 dark:text-white">ideales para ciclistas</p>
                    
                </div>
            </div> 

            

           </div>
            
        </div>

        <div className="px-4 lg:px-6 w-full" id= "rentas_destacadas">
            <h2 className="text-3xl text-primary font-semibold pb-6 mt-2 dard:text-white dark:text-white">Rentas Destacadas</h2>
            <div className="w-full h-auto flex flex-col  ">
                
                <div className="  w-full h-100 bg-img10 bg-cover bg-center rounded-xl mb-8 lg:bg-center cursor-pointer ">
                    <p className="Card__title text-white">Vive Ciudad Caribia</p>
                    <p className="text-md pl-8 text-white mr-24   lg:text-lg ">Explora nuestra Ciudad.</p>
                </div>

                
                <div className="lg:flex lg:h-full lg:w-full  lg:space-x-4 ">
                    <div className="w-full h-100 bg-img11 bg-cover rounded-xl lg:h-auto mb-8 cursor-pointer">
                        <p className="Card__title">El corazon de Ciudad Caribia</p>
                        <p className="text-md pl-8 text-white mr-24 lg:text-lg lg:text-white">Redoma de los indios.</p>
                    </div>
                    <div className=" h-auto w-full  ">
                        <div className="w-full h-100 bg-img12 bg-cover rounded-xl mb-8 cursor-pointer">
                            <p className="Card__title">Conoce a nuestra gente</p>
                            <p className="text-md pl-8 text-white mr-24 lg:text-lg lg:text-white">Ciudad Caribia lugar de sueños.</p>
                        </div>
        
                        <div className="w-full h-100 bg-img13 bg-cover rounded-xl mb-8 cursor-pointer">
                            <p className="Card__title">Despertar</p>
                            <p className="text-md pl-8 text-white mr-24 lg:text-lg lg:text-white">Disfruta de nuestros increibles amaneceres</p>
                        </div>
                    </div>
    
                    
                </div>

                

                

            </div>
        </div>

        <div className="w-full h-full" id="faqs">
            <div className="w-full h-full px-6 flex flex-col space-y-4 items-center justify-center">
                <p className="text-3xl text-primary font-semibold mt-4  dark:text-white">FAQS</p>
                <div>
                    <div>

                        <p className="text-xl font-medium text-primary dark:text-white">Payment Methods</p>
                        <p className="text-md pt-2 dark:text-white">We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-primary dark:text-white">Cancellation Policy</p>
                        <p className="text-md pt-2 dark:text-white">We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-primary dark:text-white">Long Stays</p>
                        <p className="text-md pt-2 dark:text-white">We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                        <p className="text-md pt-2 dark:text-white">We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-primary dark:text-white">Cancellation Policy</p>
                        <p className="text-md pt-2 dark:text-white">We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-primary dark:text-white">Cancellation policy</p>
                        <p className="text-md pt-2 dark:text-white">We accept VISA, MasterCard, American Express, Paypal and Binance</p>
                    </div>
                </div>
            </div>
        </div>
        
        <footer className="w-full h-auto bg-gray-50 p-6 space-y-2 pb-6" id="sobre_nosotros">
            <p className="text-lg">Acerca De</p>
            <p className="text-sm text-gray-300 cursor-pointer ">Inversionistas</p>
            <p className="text-sm text-gray-300 cursor-pointer">Empleos</p>
            <p className="text-sm text-gray-300 cursor-pointer">Términos y condiciones</p>
            <p className="text-sm text-gray-300 cursor-pointer">Platzi Travel, Inc.</p>

        </footer>
    </section>
  )
}

export default Home
