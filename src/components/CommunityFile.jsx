//`https://cyduck.herokuapp.com/upload`

import Community from "./community"
import jwt_decode from "jwt-decode";
function CommunityFile(){


    const url=`https://cyduck.herokuapp.com`

    return(
        <Community url={`${url}/upload/`} />
    )
}

export default CommunityFile;