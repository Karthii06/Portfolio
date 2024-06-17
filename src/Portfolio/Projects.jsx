import { useEffect, useRef, useState } from 'react'
import './Projects.css'
import ReactDOM from 'react-dom'



function Projects(){


    let [images,setimages] = useState(0)
    let [desc,setdesc] = useState(`Netflix Clone done using HTML, CSS, JS `)
    let lessref=useRef()
    let greaterref=useRef()
    let project1ref=useRef()
    let project2ref=useRef()
    let project3ref=useRef()
    let descref = useRef()

    let arr=['src/assets/Screenshot 2024-05-20 170622.png','src/assets/Screenshot 2024-05-20 173205.png','src/assets/Screenshot 2024-05-22 232044.jpg']
    function lessthan(){
    }

    function greaterthan(){
        
    setimages(images+1)
    if(images===1){
        project2ref.current.src='src/assets/Screenshot 2024-05-20 173205.png'
        project1ref.current.src='src/assets/Screenshot 2024-05-22 232044.jpg'
        project3ref.current.src='src/assets/Screenshot 2024-05-20 170622.png'
        images===1 && setdesc('Weather Forecaster to display the weather of specified cities using API Integration')
    }
    if(images===2){
        project2ref.current.src='src/assets/Screenshot 2024-05-20 170622.png'
        project1ref.current.src='src/assets/Screenshot 2024-05-20 173205.png'
        project3ref.current.src='src/assets/Screenshot 2024-05-22 232044.jpg'
        images===2 && setdesc('If you are a Movie Buff, Its a page for you to explore the movie specs.')
        
    }
    if(images===3){
        project2ref.current.src='src/assets/Screenshot 2024-05-22 232044.jpg'
        project1ref.current.src='src/assets/Screenshot 2024-05-20 170622.png'
        project3ref.current.src='src/assets/Screenshot 2024-05-20 173205.png'
        images===3 && setdesc('Netflix Clone done using HTML, CSS, JS')
        
     images===3 && setimages(1)
    }
    }

    function lessthan(){
        setimages(images+1)
    if(images===1){
        project1ref.current.src='src/assets/Screenshot 2024-05-20 173205.png'
        project3ref.current.src='src/assets/Screenshot 2024-05-22 232044.jpg'
        project2ref.current.src='src/assets/Screenshot 2024-05-20 170622.png'
        images===1 && setdesc('If you are a Movie Buff, Its a page for you to explore the movie specs.')
        
    }
    if(images===2){
        project3ref.current.src='src/assets/Screenshot 2024-05-20 170622.png'
        project2ref.current.src='src/assets/Screenshot 2024-05-20 173205.png'
        project1ref.current.src='src/assets/Screenshot 2024-05-22 232044.jpg'
        images===2 && setdesc('Weather Forecaster to display the weather of specified cities using API Integration')
    }
    if(images===3){
        project2ref.current.src='src/assets/Screenshot 2024-05-22 232044.jpg'
        project1ref.current.src='src/assets/Screenshot 2024-05-20 170622.png'
        project3ref.current.src='src/assets/Screenshot 2024-05-20 173205.png'
        images===3 && setdesc('Netflix Clone done using HTML, CSS, JS')
        
     images===3 && setimages(1)
    }
    }


    
    useEffect(()=>{
        greaterthan()
    },[])

    return(
        <section id='project'>
            <article id='projecttitle'>PROJECTS</article>
            <article id='projectcards'>
                  <div id='project1' >
                        <img src="src/assets/Screenshot 2024-05-20 170622.png" id='img1' alt="" ref={project1ref} /> PROJECT 1
                  
                  </div>
                <div id='project2'>
                    <img  alt="" src="src/assets/Screenshot 2024-05-22 232044.jpg"  ref={project2ref} id='img2' /></div>
                  <div id='project3' >
                  <img  src='src/assets/Screenshot 2024-05-20 173205.png' alt="" className=''  ref={project3ref} id='img3'/></div> 
            </article>
            <article id='projectdesc'>
                  <h1 useref={descref} >{desc} </h1>
            </article>
            <article>
                
            </article>
            <button id='lessthan' ref={lessref} onClick={lessthan}><i class="fa-solid fa-chevron-left"></i></button>

            <button id='greaterthan' ref={greaterref} onClick={greaterthan}><i class="fa-solid fa-chevron-right"></i></button>

        </section>
    )
}
export default Projects