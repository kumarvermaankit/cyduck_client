import Community from "./community"
import jwt_decode from "jwt-decode";

function MyQuestions(){
    const token=localStorage.usertoken;
    var decoded=jwt_decode(token)
  
   





    
 
    return(
        <div>
        
        <Community url={`https://cyduck.herokuapp.com/upload/myquestions`} url1={`https://cyduck.herokuapp.com/upload/mq/${decoded.data.username}`} />
        </div>
    )
}

export default MyQuestions;