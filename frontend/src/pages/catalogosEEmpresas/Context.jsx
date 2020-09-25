import React,{createContext, useState,useContext} from 'react';




const CountContext = createContext()

export default function CountProvider({children}) {
   const [produtos, setProdutos] = useState([]);
   
    return(
        <CountContext.Provider value={{
            produtos,
            setProdutos
        }}>


            {children}



        </CountContext.Provider>
    )
};
export function useCount(){
    const context = useContext(CountContext);
    const {produtos, setProdutos}= context;
    return  {produtos, setProdutos}
}