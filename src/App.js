import React, {useState} from 'react';
import CountingFruit from "./Components/CountingFruit";
import Form from "./Components/Form";
import './App.css';

function App() {
    const [aardbeiCounter, setAardbeiCounter] = useState(0);
    const [banaanCounter, setBanaanCounter] = useState(0);
    const [appelCounter, setAppelCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

function ResetCounter(){
    setAardbeiCounter(0)
    setBanaanCounter(0)
    setAppelCounter(0)
    setKiwiCounter(0)

}
  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <CountingFruit fruitName={"Aardbeien"} fruitCounter={aardbeiCounter} setFruitCounter={setAardbeiCounter}/>
        <CountingFruit fruitName={"Bananen"} fruitCounter={banaanCounter} setFruitCounter={setBanaanCounter}/>
        <CountingFruit fruitName={"Appels"} fruitCounter={appelCounter} setFruitCounter={setAppelCounter}/>
        <CountingFruit fruitName={"Kiwi's"} fruitCounter={kiwiCounter} setFruitCounter={setKiwiCounter}/>
        <button
        type="button"
        onClick={ResetCounter}>
            Reset
        </button>
        <Form/>
    </>
  );
}

export default App;
