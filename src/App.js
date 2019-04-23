import React, {Component} from 'react';
import './App.css';


  class App extends Component {
    constructor() {
      super();
      this.state = {
        menuStatus: ''
      }
    }
    
    handleClick = () => {
   
      if(this.state.menuStatus === 'open') {
        this.setState({
          menuStatus: 'closed'
        })
      } else {
        this.setState({
          menuStatus: 'open'
        })
      }
    }

    
    render() {




      return (
    <div className="App">
    <nav>
      <h3>Start Bootstrap</h3>
        <ul>
          <li>SERVICES</li>
          <li><a>PORTFOLIO</a></li>
          <li><a>ABOUT</a></li>
          <li><a>TEAM</a></li>
          <li><a>CONTACT</a></li>
          <li><a></a></li>

        </ul>
        <img  onClick={this.handleClick} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFRypROy2g5WEeVVPF7fImQKSxMQwd44t_3fA1yQROCKLEdFirA" alt="Hamburger Menu"/>
    </nav>

<body>
    <div className = {'side-menu-' + this.state.menuStatus}>
      <p>SERVICES</p>
      <p>PORTFOLIO</p>
      <p>ABOUT</p>
      <p>TEAM</p>
      <p>CONTACT</p>
    </div>

<div className="Welcome">
    <h2>Welcome To Our Studio!</h2>
    <h1>IT'S NICE TO MEET YOU</h1>
</div>
        <div className="TellMeButton" >
            <button className="TellMe">TELL ME MORE</button>
        </div>


</body
></div>

  );
}
}

export default App;