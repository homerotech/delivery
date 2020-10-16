import React,{createContext, useState,useContext} from 'react';




const StoreContext = createContext([{
    token: null,
    setToken: ()=>{},
}])

export default StoreContext;