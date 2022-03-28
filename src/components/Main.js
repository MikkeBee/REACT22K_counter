import React from "react";

const buttonHandler = () => {
  console.log("test");
};

class Main extends React.Component {
  state = {
    counter: 0,
  };

  addFiveHandler = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  };

  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };

  removeOneHandler = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  removeFiveHandler = () => {
    this.setState({
      counter: this.state.counter - 5,
    });
  };

  render() {
    return (
      <main className="mainArea">
        <div className="circleArea">
          <div className="circle">
            <p>{this.state.counter}</p>
          </div>
        </div>
        <div className="buttonArea">
          <button className="addFive" onClick={this.addFiveHandler}>
            Add Five
          </button>
          <button className="addOne" onClick={this.addOneHandler}>
            Add One
          </button>
          <button className="reset" onClick={this.resetHandler}>
            Reset
          </button>
          <button className="removeOne" onClick={this.removeOneHandler}>
            Remove One
          </button>
          <button className="removeFive" onClick={this.removeFiveHandler}>
            Remove Five
          </button>
        </div>
      </main>
    );
  }
}

// const Main = () => {
//   return (
//     <main className="mainArea">
//       <div className="circleArea">
//         <div className="circle">
//           <span className="circleValue">0</span>
//         </div>
//       </div>
//       <div className="buttonArea">
//         <button className="addFive" onClick={buttonHandlerAdd5}>
//           Add Five
//         </button>
//         <button className="addOne" onClick={buttonHandlerAdd1}>
//           Add One
//         </button>
//         <button className="reset" onClick={buttonHandlerRemove}>
//           Reset
//         </button>
//         <button className="removeOne" onClick={buttonHandler}>
//           Remove One
//         </button>
//         <button className="removeFive" onClick={buttonHandler}>
//           Remove Five
//         </button>
//       </div>
//     </main>
//   );
// };

export default Main;
