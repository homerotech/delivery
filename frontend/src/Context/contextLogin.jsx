import React,{createContext, useState,useContext} from 'react';




const StoreContext = createContext([{}, ()=>{}])

export default function StoreProvider({children}) {
   const [state, setState] = useState([]);
   
    return(
        <StoreContext.Provider value={[state, setState]}>


            {children}



        </StoreContext.Provider>
    )
};