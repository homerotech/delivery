import Cookies from 'js-cookie'

var session = {session: "RCXCGE3H74LFQR3IMNKHRHMJTX34I7EOQ9FV5ATCI6LQ"}

var params = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(session)
}


export async function isAuthenticated() {
   const response = await fetch('http://localhost:5000/api/auth',params).then(
        res => res.json()
        ).then(
            res => {
            if(res===false){
                console.log(res)
                return false
            }
            else{
                return true
            }
            }
            )
            console.log(response)
            return response
    }