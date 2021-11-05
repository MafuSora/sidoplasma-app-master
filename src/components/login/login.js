
import './login.css'
import Sidoplasma from '../img/LOGO SIDOPLASMA.png';

const Login=()=>{
    
    return(
    <div id="loginform">
        <img src={Sidoplasma} alt="sidoplasma" width="100" height="25" className="logo"></img> 
        <h2 id="headerTitle" classname= "fontlogin">SIGN IN</h2>
          
        <div>
            <FormInput description="Username" placeholder="Enter your username" type="text" />
            <FormInput description="Password" placeholder="Enter your password" type="password"/>
            <FormButton title="Sign In"/>
        </div>
    </div>
    
    );
}


const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

export default Login