import React from "react";

const CountingFruit = ({fruitImage, fruitImageText, fruitName, fruitCounter, setFruitCounter}) => {

    return (
        <>
            <div>
                <img src={fruitImage} alt={fruitImageText}/>
                <h2>{fruitName}</h2>
                <button onClick={() => setFruitCounter(fruitCounter - 1)}
                        disabled={fruitCounter === 0}
                >
                    -
                </button>
                {fruitCounter}
                <button onClick={() => setFruitCounter(fruitCounter + 1)}>+</button>
            </div>
        </>
    );
};

export default CountingFruit;