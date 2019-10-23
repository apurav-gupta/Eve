import React,{Component} from 'react';
import './NavbarHome.css';

//create the Navbar Component
class NavbarHome extends Component {
 
    render(){
   
    return(
        
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="/"><img src="logo.png"></img></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
          <li><button class="btn navbar-btn navbar-btn1">Create Event</button></li>
          <li><button class="btn navbar-btn navbar-btn2">Help</button></li>
          <li><button class="btn navbar-btn navbar-btn3">Login</button></li>
      </ul>
    </div>
  </div>
</nav>
        
        )
    }
}

export default NavbarHome;