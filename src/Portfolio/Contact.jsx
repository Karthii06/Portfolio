import { useRef } from 'react';
import './Contact.css'
import { IoCallOutline } from "react-icons/io5"
import { MdWifiCalling3 } from "react-icons/md"

function Contact(){


   return(
      <main id='full' >
         <section id='contacttitle'>Get In Touch</section>
    <section id='contact'>
      
       <article id='details'>

         <div id='social'>
        <span id='share'> <i id='sharelogo' class="fa-solid fa-share-nodes"></i></span> 
         <h1 id='soctitle'>Social Profiles</h1>
         <div id='soclogos'>
            <span id='soc1'><i class="fa-brands fa-twitter"  id='icon1'></i></span>
            <span id='soc2'><i class="fa-brands fa-github" id='icon2'></i></span>
            <span id='soc3'><i class="fa-brands fa-linkedin" id='icon3'></i></span>
            <span id='soc4'> <i   id='icon4' class="fa-brands fa-instagram"></i></span>
         </div>
         </div>

         <div id='callmail'>
         <div id='one'>
            <span id='call'> <MdWifiCalling3 id='calllogo'  /></span>
           <h1 id='calltitle'>Call me</h1>
           <a href="" id='a'  >+91 6374741730</a>
           </div>

           <div id='two'>
            <span id='maill'><i class="fa-regular fa-envelope"  id='mailllogo'></i></span>
            <h1 id='mailtitle'>Mail me</h1>
         <a href="" id='mailid'>karthiiv36@gmail.com</a>
           </div>

         </div>

          
       </article>
     
     <article action="" id='forms' >
      <input type="text" id='names' placeholder='Name'/>
      <input type="email" id='email' placeholder='Email' />
      <textarea id='textarea' placeholder='Message' />
      <button id='sendmessage'>Send Message</button>

      </article>
     
     
    </section>
    <article id='footer'>
         <h1 id='footername'>Karthikeyan</h1>
         <h3 id='quote'> " Don't be feared by the failures
            <br />
            Led by the dreams in your Heart "
         </h3>
     </article>
    </main>
   )
}
export default Contact;