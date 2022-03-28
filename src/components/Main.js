import React from "react";

const buttonHandler = () => {
  console.log("test");
};

const Main = () => {
  return (
    <main className="mainArea">
      <div className="circleArea">
        <div className="circle">
          <span className="circleValue">0</span>
        </div>
      </div>
      <div className="buttonArea">
        <button className="addFive" onClick={buttonHandler}>
          Add Five
        </button>
        <button className="addOne" onClick={buttonHandler}>
          Add One
        </button>
        <button className="reset" onClick={buttonHandler}>
          Reset
        </button>
        <button className="removeOne" onClick={buttonHandler}>
          Remove One
        </button>
        <button className="removeFive" onClick={buttonHandler}>
          Remove Five
        </button>
      </div>
    </main>
  );
};

export default Main;
