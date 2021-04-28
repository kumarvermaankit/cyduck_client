


import AceEditor from "react-ace";
 

import 'brace/mode/javascript';
import 'brace/theme/ambiance';




function CodeM(props){
 






  return(
    <div>

<AceEditor
mode="javascript"
theme="ambiance"

    
    onChange={props.Change}
   showPrintMargin={false}
   showGutter={false}
    editorProps={{ $blockScrolling: true }}
     name={props.name}  value={props.val}    placeholder={props.plh}
   style={{width:`${props.wdt}`, margin:"30px", zIndex:"5" ,height:`${props.hght}`,background:"rgba(3, 22, 46, 0.52)",color:"white",visibility:`${props.visible}`}}
   readOnly={props.read}
  autofocus="autofocus"
  
  />





    </div>
  )
}

export default CodeM;