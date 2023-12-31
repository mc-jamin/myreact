import { useState } from "react";
const Counting = () => {
  const [count, setCount] = useState(0);
  const [isPositive, setPositive] = useState(true);
  const buttonValue = {
    buttonAdd: {
      type: "button",
      name: "addition",
      value: "Add",
      onclick: () => {
        setPositive(true);
        setCount(count + 1);
      },
    },
    buttonSubtract: {
      type: "button",
      name: "subtraction",
      value: "Subtract",
      onclick: () => {
        if (count > 0) setCount(count - 1);
        else setPositive(false);
      },
    },
  };
  return (
    <div class="bg-light card ">
      <h1 className="card-title card-header">Counting App</h1>
      <div className="container">
        <h2 className=" d-flex bd-highlight justify-content-centre card-text mt-4 p-2">
          Press to start Counting
        </h2>
        <div className="d-flex justify-content flex-column">
          <p>
            <input
              type={buttonValue.buttonAdd.type}
              className="btn bg-primary text-white m-2"
              onClick={buttonValue.buttonAdd.onclick}
              value={buttonValue.buttonAdd.value}
            />
          </p>
          <p>
            <input
              type={buttonValue.buttonSubtract.type}
              className="btn bg-primary text-white m-2"
              onClick={buttonValue.buttonSubtract.onclick}
              value={buttonValue.buttonSubtract.value}
            />
          </p>
        </div>
        <p className="text-muted">
          {isPositive
            ? count === 1
              ? `Clicked ${count} time`
              : `Clicked ${count} times`
            : "Num cannot be negative"}
        </p>
      </div>
    </div>
  );
};
export default Counting;
