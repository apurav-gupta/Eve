import React,{Component} from 'react';
import '../Navbar/NavbarLogin.css';

//create the Navbar Component
class NavbarLogin extends Component {
 
    render(){
   
    return(
        <nav class="navbar navbar-default navbar-login">
        <div class="container-fluid">
        
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/"><img src="logo.png"></img></a>
            </div>

            
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right navbarlogin-search navbarlogin-button">
                <li><button class="btn navbarlogin-btn ">Help</button></li>
                <li><button class="btn navbarlogin-btn "><a class="loganchor" href="/login">Login</a></button></li>
            </ul>
            </div>
        </div>
        </nav>
        
        )
    }
}

export default NavbarLogin;