//`https://cyduck.herokuapp.com/upload`

import Community from "./community"

function CommunityFile(){

    const url=`https://cyduck.herokuapp.com`

    return(
        <Community url={`${url}/upload`} />
    )
}

export default CommunityFile;