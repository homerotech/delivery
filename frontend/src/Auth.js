import Cookies from 'js-cookie'
import { jwt } from 'twilio'

var session = Cookies.get("session")

var params = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Autorization": "Bearer " +jwt
    },
    body: JSON.stringify(session)
}


export async function isAuthenticated() {
   const response = await fetch('http://localhost:5000/api/auth',params).then(
        res => res.json()
        ).then(
            res => {
            if(res===false){

                return false
            }
            else{
                return res
            }
            }
            )
            return response
    }