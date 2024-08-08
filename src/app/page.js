"use client"
import Button from '@mui/material/Button';
 import {Component} from "react"
 import "./styles.css"

class Home extends Component{

  constructor() {
    super();
    this.state ={
      count: 0
    }
  }

  componentDidMount() {
    console.log("Me renderizo")
  }
componentDidUpdate(){
  console.log("Me actualizo")

}
aumentar = () => {
  this.setState ({
    count: this.state.count +1
  })
}
reiniciar = () => {
  this.setState ({
    count: 0
  })
}
restar = () => {
  this.setState ({
    count: this.state.count -1
  })
}

  render() {
    return(
      <div className="container">
        <p>Hola mundo x{this.state.count}.!</p>
        <Button variant="contained" onClick={this.aumentar}>AUMENTAR</Button>
        <Button variant="contained" onClick={this.reiniciar}>REINICIAR</Button>
        <Button variant="contained" onClick={this.restar}>RESTAR</Button>
      </div>
    )
  }
}
export default Home;
