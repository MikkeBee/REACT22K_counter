import React from "react";

const Main = () => {
  return (
    <div class="mainArea">
      <div class="circleArea">
        <div class="circle">
          <span class="circleValue">0</span>
        </div>
      </div>
      <div class="buttonArea">
        <button class="addFive">Add Five</button>
        <button class="addOne">Add One</button>
        <button class="reset">Reset</button>
        <button class="removeOne">Remove One</button>
        <button class="removeFive">Remove Five</button>
      </div>
    </div>
  );
};

export default Main;
