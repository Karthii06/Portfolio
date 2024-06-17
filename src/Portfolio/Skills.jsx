import './Skills.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Skills(){
    return(<>
        <section id='skills'>
          <img src="src\assets\blue-line-coding-seamless-pattern-vector-12253668.jpg" id='bgimg' alt="" />
         <h1 id='skilltitle'>Skills</h1>
         <div id='skillimgs'>
          <span id='html'  ><i class="fa-brands fa-html5" id='htmli'  ></i></span>
          <span id='css'><i class="fa-brands fa-css3" id='cssi' ></i></span>
          <span id='js'><i class="fa-brands fa-square-js"  id='jsi'></i></span>
          <span id='react'><i class="fa-brands fa-react" id='reacti'></i></span>
         </div>
         <h2 id='skilldesc'>I am a front End Developer with hands-on skills in following Technologies like HTML, CSS, 
         <br />Javascript and React.Js . I've also worked with version control system tools like Github... </h2>
        </section>
        </>
    )
}
export default Skills