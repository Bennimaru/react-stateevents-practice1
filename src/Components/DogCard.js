import React from "react";

class DogCard extends React.Component {

  state={
    bark: false
  }

  handleClick = ()=>{
    this.setState({
      bark: !this.state.bark
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.handleClick}>Bark</button>
        {this.state.bark? <h4 className="bark">RUFF</h4>:null}
      </div>
    );
  }
}

export default DogCard;
