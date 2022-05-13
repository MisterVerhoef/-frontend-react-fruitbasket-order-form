import React from "react";

const CountingFruit = ({fruitName, fruitCounter, setFruitCounter}) => {

    return (
    <div id="fruit-counter">
        <h2>{fruitName}</h2>
        <button onClick={() => setFruitCounter(fruitCounter - 1)}>-</button>
        {fruitCounter}
        <button onClick={() => setFruitCounter(fruitCounter + 1)}>+</button>
    </div>
    );
};

export default CountingFruit;