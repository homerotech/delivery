import React from "react"

function checkExpire(props){
    console.log(props)
    if(!props.expires){
      return <div><span style={{color: "red"}}>EXPIRADA</span><a style={{marginLeft:"10px"}} className="btn-danger btn" href="/Planos">RENOVAR ASSINATURA</a></div>

    }
    else{
      if(Number(props.expires)<=new Date.now()){
        return <div><span style={{color: "red"}}>EXPIRADA</span><a style={{marginLeft:"10px"}} className="btn-danger btn" href="/Planos">RENOVAR ASSINATURA</a></div>
      }
      else{
        return <span style={{color: "green"}}>ATIVA</span>

      }
    }
  }
export default checkExpire();