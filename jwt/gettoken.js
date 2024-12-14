import jwt from "jsonwebtoken";

function getData (){
  try {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmF0aW1haCIsImFnZSI6MjIsImlzQWxpdmUiOnRydWUsImlhdCI6MTczNDE2MjgzNCwiZXhwIjoxNzM0MTY2NDM0fQ.Q3-Pt73aa2b1HIPayhjgW_DW5eXzeIEFYhLIS-JxoK4"
   let key = "FATIMAH"
   let verify = jwt.verify(token,key);
   console.log(verify);
   if (verify) {
    console.log("MATChed");
   }else {
    console.log("NOt MAtched");
   }
    } catch(error) {
        console.log(error);

    }

}

getData()