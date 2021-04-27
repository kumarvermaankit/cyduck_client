import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import { useAppContext } from "./lib/contextlib";
import {Navbar,Nav} from "react-bootstrap"
import "./navbar.css"
import jwt_decode from "jwt-decode";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from "axios";
import MultiSelect from "react-multi-select-component";
import SearchIcon from '@material-ui/icons/Search';






function NavigationBar(){




  const [l,setl]=useState("")
  let history=useHistory();
const{isAuthenticated,userHasAuthenticated}=useAppContext();


var tkn=localStorage.getItem('usertoken');


if(tkn!==null){
  const token = localStorage.usertoken
  var decoded=jwt_decode(token)
}

const [lpara,setlpara]=useState(true)
const [fpara,setfpara]=useState(true)
const [frpara,setfrpara]=useState(true)


const [selected, setSelected] = useState({
  languages:[],
  fields:[],
  frameworks:[],
  string:""

});
const [passvalue,setpassvalue]=useState({
  larr:[],
  farr:[],
  frarr:[],
  s:""
})


const [psrc,setpsrc]=useState()
  async function Logout(event){

event.preventDefault();

await localStorage.removeItem('usertoken')
userHasAuthenticated(false);
 
history.push("/signin");
}





function Setprofile(imgurl){
 
  setpsrc(imgurl)
  
   
}





useEffect(()=>{


setl(window.location)

 
  

 
if(decoded){
  axios.get(`https://cyduck.herokuapp.com/profile/${decoded.data.username}`)
  .then((result)=>{
   
    Setprofile(result.data)
   
  })
  .catch((err)=>{
    console.log(err)
  })
}



},[l])


useEffect(()=>{
  var val=document.getElementsByClassName("gray")
  console.log(val)
 var count=0
 for(var i=0;i<val.length;i++){
   console.log(val[i].tagName)
 if(val[i].tagName==="SPAN"){
 
 
 
  if(count===0){
     val[i].textContent="language"
   }
   else if(count===1){
     val[i].textContent="field"
   }
   else if(count===2){
 val[i].textContent="framework"
   }
   count++
 }
 console.log(val[i].textContent)
 }
},[])


const languages=[
  {label:"javascript",value:"javascript"},
  {label:"java",value:"java"},
  {label:"python",value:"python"},
  {label:"C++",value:"C++"},
  {label:"C",value:"C"},
  {label:"ruby",value:"ruby"},
  ]
  
  const fields=[
  {label:"Web-Development",value:"WebD"},
  {label:"Android-Development",value:"Android"},
  {label:"UI-UX",value:"uix"},
  {label:"Data-Structures and Algorithms",value:"DSA"},
  {label:"Competitive-Codeing",value:"CC"},
  {label:"AI and ML",value:"AM"},
  ]





function dropValueGetter(value,a){
   
  
  if(a===1){
    setlpara(false)
      var arr1=[]
      setSelected((prevvalue)=>{
          return{
              ...prevvalue,
              languages:value
          }
      })

      value.map((each)=>{
      arr1.push(each.value)
      })
   setpassvalue((prevvalue)=>{
       return{
           ...prevvalue,
           larr:arr1
       }
   })
 


  }
  else if(a===2){
    setfpara(false)
      var arr1=[]
  
      setSelected((prevvalue)=>{
          return{
              ...prevvalue,
              fields:value
          }
      })
      value.map((each)=>{

arr1.push(each.value)
})
      setpassvalue((prevvalue)=>{
          return{
              ...prevvalue,
              farr:arr1
          }
      })
      
  }
  else if(a===3){
    setfrpara(false)
      var arr1=[]
      setSelected((prevvalue)=>{
          return{
              ...prevvalue,
              frameworks:value
          }
      })
      value.map((each)=>{
     arr1.push(each.value)
      })
      setpassvalue((prevvalue)=>{
          return{
              ...prevvalue,
              frarr:arr1
          }
      })
 
  }
  
  
if(passvalue.s===""){
  setpassvalue((prevvalue)=>{
      return{
          ...prevvalue,
          s:null
      }
  })
}

 
}


function Search(){
  var str1=""
  var str2=""
  var str3=""
  
  for(var i=0;i<passvalue.larr.length;i++){
      if(i===(passvalue.larr.length-1)){
          str1=str1+`${passvalue.larr[i]}`
      }
      else{
      str1=str1+`${passvalue.larr[i]}`+","
      }
  }
  for(var i=0;i<passvalue.farr.length;i++){
      if(i===(passvalue.farr.length-1)){
          str2=str2+`${passvalue.farr[i]}`
      }
      else{
      str2=str2+`${passvalue.farr[i]}`+","
      }
  }
  for(var i=0;i<passvalue.frarr.length;i++){
      if(i===(passvalue.frarr.length-1)){
          str3=str3+`${passvalue.frarr[i]}`
      }
      else{
      str3=str3+`${passvalue.frarr[i]}`+","
      }
  }

var val=document.getElementById("search").value
var t
if(passvalue.larr.length===0){
  str1=null
}
if(passvalue.farr.length===0){
  str2=null
}
if(passvalue.frarr.length===0){
  str3=null
}
if(val===""){
  t=null
}
else{
t=val
}

var s=`/search/${str1}/${str2}/${str3}/${t}`


  history.push(s)
 
}




  







  function AfterLoginNav(){


    return(
<div >
<Navbar  expand="lg" id="nav_bar" >

 

 <div className="dropdown">
  <button className="drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   { psrc===null || psrc===undefined || psrc==="" ?<img src="https://firebasestorage.googleapis.com/v0/b/cyduck-3be89.appspot.com/o/images%2Fprofile1.jpg?alt=media&token=52193340-cd44-425d-9484-6fc68b7466a9" className="profile"  alt="no-image"  />:<img src={psrc} className="profile"  alt="no-image"  />}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href={`/pro_file/${decoded.data.username}`}>Profile</a></li>
    <li><a className="dropdown-item" style={{cursor:"pointer"}} onClick={Logout} >Logout<ExitToAppIcon style={{height:"25px",width:"25px"}} /></a></li>
    <li><a className="dropdown-item" href={`/myq`}>My Questions</a></li>
  </ul>
</div>





  <Navbar.Brand className="cyducktitle" href="/home" ><p><b>Cyduck</b></p></Navbar.Brand>

   
<form className="frm" onSubmit={Search}>
        <input id="search" className="searchInput" placeholder="Search by ID or string" />
        <button className="searchButton" type="submit"><SearchIcon /></button>
        
<MultiSelect
        className="drop_down lang"
        options={languages}
        value={selected.languages}
        onChange={(value)=>dropValueGetter(value,1)}
        labelledBy={"language"}
      />
     
     
<MultiSelect
        className="drop_down field"
        options={fields}
        value={selected.fields}
        onChange={(value)=>dropValueGetter(value,2)}
        labelledBy={"field"}
      />
      
      <MultiSelect
        className="drop_down fram"
        options={languages}
        value={selected.frameworks}
        onChange={(value)=>dropValueGetter(value,3)}
        labelledBy="frameworks"
        
      />
     
        </form>
      
        { ((l.toString().substr((l.toString().length-("/file").length),("/file").length))!="/file" && (l.toString().substr((l.toString().length-("/file").length),("/file").length))!="/home")?
    <a className="navitem" style={{left:"70px"}}  href="/file" >Ask Question</a>
     :null}

  { (l.toString().substr((l.toString().length-("/community").length),("/community").length))!="/community" && (l.toString().substr((l.toString().length-("/home").length),("/home").length))!="/home"? <Nav.Link  href="/community" className="navlog" ><h3 className="navitem" style={{left:"20px"}}><b>Community</b></h3></Nav.Link>:null}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
   
     
     
      
    </Nav>
    
  </Navbar.Collapse>

  {lpara || selected.languages.length===0?<p className="langpara">languages</p>:<p className="langpara1" >languages</p>}
     {fpara || selected.fields.length===0?<p className="fieldpara">fields</p>:<p className="fieldpara1" >fields</p>}
     {frpara || selected.frameworks.length===0?<p className="framepara">frameworks</p>:<p className="framepara1" >frameworks</p>}
</Navbar>

 
</div>
)
    
  }


function BeforeLoginNav(){
  return(
    <div >
    <Navbar  expand="lg" id="nav_bar" >
    <Navbar.Brand className="cyducktitlebeforelog" href="/home" ><h1><b>Cyduck</b></h1></Navbar.Brand>

<form className="frm1" onSubmit={Search}>
        <input id="search" className="searchInput" placeholder="Search" />
        <button className="searchButton" type="submit"><SearchIcon /></button>
<MultiSelect
        className="drop_down lang"
        options={languages}
        value={selected.languages}
        onChange={(value)=>dropValueGetter(value,1)}
        labelledBy={"Select"}
      />
      <p className="langpara">languages</p>
<MultiSelect
        className="drop_down field"
        options={fields}
        value={selected.fields}
        onChange={(value)=>dropValueGetter(value,2)}
        labelledBy={"Select"}
      />
      <span className="fieldtip">fields</span>
      <MultiSelect
        className="drop_down fram"
        options={languages}
        value={selected.frameworks}
        onChange={(value)=>dropValueGetter(value,3)}
        labelledBy={"Select"}
      />
      <span className="framtip">framworks</span>
        </form>
      
      { ( (l.toString().substr((l.toString().length-("/signin").length),("/signin").length))!="/signin" &&  (l.toString().substr((l.toString().length-("/signup").length),("/signup").length))!="/signup" && (l.toString().substr((l.toString().length-("/home").length),("/home").length))!="/home" )?
   <div>
    <a  className="navitem " href="/signin">Signin</a>
    <a  className="navitem " href="signup">Signup</a>
    </div>
     :null }
    
   
       
      {(l.toString().substr((l.toString().length-("/community").length),("/community").length))!="/community" && l!="http://localhost:3000/home"? <Nav.Link  href="/community" className="navlog" ><h3 className="navitem" style={{left:"20px"}}><b>Community</b></h3></Nav.Link>:null}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
       
         
        
       
          
        </Nav>
        

      </Navbar.Collapse>


    </Navbar>
 
    </div>
  )
}


return(

  <div>
    {isAuthenticated ?<AfterLoginNav /> :<BeforeLoginNav />}
 
  </div>
)

}

export default NavigationBar