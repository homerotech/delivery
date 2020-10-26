import Cookies from 'js-cookie'


export async function isAuthenticated() {
    var session = Cookies.get("session")
    var params = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"session": session})
    }
   const response = await fetch('http://localhost:5000/api/auth',params).then(
        res => res.json()
        ).then(
            res => {
                
            if(res.isAuth===true){
                return res
            }
            else{
                return false
            }
            }
            )
            return response
    }
