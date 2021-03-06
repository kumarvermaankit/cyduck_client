import React from "react";
import "./home.css"
import {useHistory} from "react-router-dom";

import cyduck from "./cyduck.png"

import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import TwitterIcon from '@material-ui/icons/Twitter';
import { FaDiscord } from "react-icons/fa";

function StartingPage(){


  var tkn=localStorage.getItem('usertoken');
console.log(tkn)
  let history=useHistory();


  function gotofile(event){
    event.preventDefault()

    history.push("/file")
  }

function gotosign(event){
  event.preventDefault()
  history.push("/signin")
}

    return(
        <div  className="homediv" >
        
        <div className="box">
        <div className="boxbar">
        


        </div>
        <div className="list">
         <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="/community">Community</a></li>
          <li><a href="#Contact">Contact </a></li>
                    
                

         </ul>
        </div>
        <div className="heading"><h1>CYDUCK</h1></div>
        <div className="writer">
            <h2>We ensure easy clarifications</h2>
            <p className="cyduck_desc">Cyduck is a platform which helps various communities of programmers/developers to exchange their doubts/errors with other programmers and faculties who are enthusiastic and dedicated to programming within few steps to obtain desired solution within a limited time frame by providing each other some monitory benefits</p>
            <form action=""  method="get">
            {tkn===null?<a className="strlinks" href="/signin"  >Get Started</a>:null}
           {tkn!==null?<a  className="strlinks" style={{paddingLeft:"13px"}} href="/community">Answer a Question</a>:<a  className="strlinks2" style={{paddingTop:"24px",paddingLeft:"10px"}} href="/community">Answer a Question</a>}
            
            </form>
            
            <a  className="strlinks try" href="/file" >Ask Question</a> 
        </div>
        
    </div>
    <div className="about-us">
        
        <h2>What do we do?</h2>
        <div className="about-content">
            <img   src={cyduck} alt="" />
        <h4>We allow users to post their doubts on our platform using different medium for free or by paying.<p>then other users can answer their question, and redeem the amount paid by the user</p></h4>
        
        </div>
       
                    
    </div>
    <div className="payment">
        <h2>Payment Scheme</h2>
      <p>Willingness to quench curoisity</p> 
        <div className="paymentcontain">

        <div className="payment-box">
               <div className="icon"><i className="fa fa-inr" aria-hidden="true"></i></div>
                <div className="content">
                    <h3>Free</h3>
                    <p>You can ask your question for free without any time frame</p>
                    
                </div>

                
            </div>
            <div className="payment-box">
               <div className="icon"><i className="fa fa-inr" aria-hidden="true"></i></div>
                <div className="content">
                    <h3> 3 /6hr</h3>
                    <p>For Rs. 3 you can get answer to your question within 6 hours </p>
                    
                </div>

                
            </div>
            <div className="payment-box">
                
                <div className="content">
                    <h3> 5 /3hr</h3>
                    <p>For Rs. 5 you can get answer to your question within 3 hours</p>
                    
                </div>
            </div>
            <div className="payment-box">
               
                <div className="content">
                    <h3> 10 /1hr</h3>
                    <p>For Rs. 10 you can get answer to your question within 1 hour</p>
                    
                </div>
            </div>
        </div>
        
    </div>



    <section id="Contact">
        <div className="footer">
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a href="https://t.me/joinchat/xrbUyk1degk5OTll" target="_blank"><i className="icon ion-social-instagram" ><TelegramIcon /></i></a>
                        <a href="https://www.linkedin.com/company/cyduck/" target="_blank"><i className="icon ion-social-youtube-outline" ><LinkedInIcon /></i></a>
                        <a ><i className="icon ion-social-twitter" ></i><TwitterIcon /></a>
                        <a href="#" href="https://discord.gg/XJNPaF4b" target="_blank"><FaDiscord /></a>
                    </div>
    
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Get in Touch</a></li>
                        
                        
                    </ul>
                    <p className="copyright">Company Name  Cyduck ?? 2021</p>
                </footer>
            </div>
            
        
         </div>
        
    </section>
        </div>
    )
}



export default StartingPage