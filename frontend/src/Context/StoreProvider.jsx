import React,{createContext, useState,useContext} from 'react';
import useStorage from './contextLogin'

 const StoreProvider=({children})=> {
    const [token , setToken] = useStorage('token');
    
     return(
         <StoreContext.Provider value={{token, setToken}}>
 
 
             {children}
 
 
 
         </StoreContext.Provider>
     )
 };
 
export default StoreProvider