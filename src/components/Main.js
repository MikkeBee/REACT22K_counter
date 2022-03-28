import React from "react";

const buttonHandler = () => {
  console.log("test");
};

class Main extends React.Component {
  state = {
    counter: 0,
  };

  addOneHandler = () => {
    console.log("wow you can really dance");
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  removeFiveHandler = () => {
    console.log("ooh good soup");
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
          <button className="addFive" onClick={buttonHandler}>
            Add Five
          </button>
          <button className="addOne" onClick={this.addOneHandler}>
            Add One
          </button>
          <button className="reset" onClick={buttonHandler}>
            Reset
          </button>
          <button className="removeOne" onClick={buttonHandler}>
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
