import jwt from "jsonwebtoken"


function token() {
    try {
        let userObj = {
            name:"fatimah",
            age: 22,
            isAlive:true
        }
        console.log(userObj);

        let secretkey= "FATIMAH"
        let getToken = jwt.sign(userObj,secretkey,{expiresIn:"1h"})
        console.log(getToken);

    } catch (error) {
        console.log(error);
    }
}

token()