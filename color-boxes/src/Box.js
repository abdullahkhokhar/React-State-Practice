import React, {Component} from 'react';
import './Box.css';
import {choice} from './Helpers';


class Box extends Component {
  static defaultProps = {
    allColors: ["purple", "red", "magenta", "violet", "pink"]
  };


  constructor(props){
    super(props);
    this.state = {color: choice(this.props.allColors)};
    this.handleClick = this.handleClick.bind(this);
  }

  pickColor(){
    let newColour;
    do{
      newColour = choice(this.props.allColors);
    } while (newColour === this.state.color)
    this.setState({color: newColour});
  }

  handleClick(){
    this.pickColor();
  }

  render(){
    return (
      <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    );
  }
}

export default Box;
