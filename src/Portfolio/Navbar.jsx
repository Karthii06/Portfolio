// import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar(){
    return(
        <nav id='navbar' >
            <a   id='home1' href='#home' >Home</a>
            <a  id='contact1' href='#full'>Contact</a>
            <a  id='projects1' href='#project'>Projects</a>
        </nav>
    )
}
export default Navbar;