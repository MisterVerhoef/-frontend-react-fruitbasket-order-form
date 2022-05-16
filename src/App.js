import React, {useState} from 'react';
import CountingFruit from "./Components/CountingFruit";
import TextInputField from "./Components/textInputField";
import RadioButton from "./Components/radioButton";
import strawberry from "./assets/strawberry.png";
import banana from "./assets/banana.png";
import apple from "./assets/apple.png";
import kiwi from "./assets/kiwi.png";
import logo from "./assets/screenshot-logo.png";


import './App.css';


function App() {
    const [aardbeiCounter, setAardbeiCounter] = useState(0);
    const [banaanCounter, setBanaanCounter] = useState(0);
    const [appelCounter, setAppelCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    const [nameValue, setNameValue] = React.useState('');
    const [lastNameValue, setLastNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState(0);
    const [postcodeValue, setPostcodeValue] = React.useState('');
    const [commentsValue, setCommentsValue] = React.useState('');
    const [newsletterValue, setNewsletterValue] = React.useState(false);

    const [bezorgFrequentie, setBezorgFrequentie] = useState('');

    const [dagDeel, setDagdeel] = React.useState('Overdag');

    const handleOverdagChange = () => {
        setDagdeel('Overdag');
    };

    const handleAvondChange = () => {
        setDagdeel('Avond');
    };

    const handleChange = (event) => {
        setBezorgFrequentie(event.target.value);
    };


    function ResetCounter() {
        setAardbeiCounter(0)
        setBanaanCounter(0)
        setAppelCounter(0)
        setKiwiCounter(0)


    }

    function handleSubmit(e) {
        e.preventDefault();
        let aardbeiCount = aardbeiCounter + "x aardbeien";
        let banaanCount = banaanCounter + "x bananen";
        let appelCount = appelCounter + "x appels";
        let kiwiCount = kiwiCounter + "x kiwi's";
        let termsChecked = "akkoord voor nieuwsbrief = " + newsletterValue;

        console.log(nameValue, lastNameValue, ageValue, postcodeValue, dagDeel, bezorgFrequentie, commentsValue, termsChecked, aardbeiCount, banaanCount, appelCount, kiwiCount);

    }

    return (
        <>
            <header>
                <img src={logo} alt="logoImage"/>
            </header>
            <main>
                <article id="fruit-counter">
                    <CountingFruit fruitImage={strawberry} fruitImageText={"aardbei"} fruitName={"Aardbeien"}
                                   fruitCounter={aardbeiCounter}
                                   setFruitCounter={setAardbeiCounter}/>
                    <CountingFruit fruitImage={banana} fruitImageText={"banaan"} fruitName={"Bananen"}
                                   fruitCounter={banaanCounter} setFruitCounter={setBanaanCounter}/>
                    <CountingFruit fruitImage={apple} fruitImageText={"appel"} fruitName={"Appels"}
                                   fruitCounter={appelCounter} setFruitCounter={setAppelCounter}/>
                    <CountingFruit fruitImage={kiwi} fruitImageText={"kiwi"} fruitName={"Kiwi's"}
                                   fruitCounter={kiwiCounter} setFruitCounter={setKiwiCounter}/>
                    <button
                        type="button"
                        onClick={ResetCounter}>
                        Reset
                    </button>
                </article>


                <form id="form-layout" onSubmit={handleSubmit}>

                    <TextInputField
                        textLabel={"Voornaam"}
                        textValue={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    />

                    <TextInputField
                        textLabel={"Achternaam"}
                        textValue={lastNameValue}
                        onChange={(e) => setLastNameValue(e.target.value)}
                    />
                    <TextInputField
                        textLabel={"Leeftijd"}
                        textValue={ageValue}
                        onChange={(e) => setAgeValue(e.target.value)}
                    />
                    <TextInputField
                        textLabel={"Postcode"}
                        textValue={postcodeValue}
                        onChange={(e) => setPostcodeValue(e.target.value)}
                    />
                    <p>Bezorgfrequentie</p>
                    <label htmlFor="dropdown-menu"></label>
                    <select value={bezorgFrequentie} onChange={handleChange}>
                        <option value="Iedere Week">Iedere Week</option>
                        <option value="Om de week">Om de week</option>
                        <option value="Iedere maand">Iedere maand</option>
                    </select>

                    <label htmlFor="dagdeel-bezorging-overdag">
                        <RadioButton
                            label="Overdag"
                            value={dagDeel === 'Overdag'}
                            onChange={handleOverdagChange}
                        />
                    </label>
                    <label htmlFor="dagdeel-bezorging-avond">
                        <RadioButton
                            label="Avond"
                            value={dagDeel === 'Avond'}
                            onChange={handleAvondChange}
                        />
                    </label>
                    <label htmlFor="comments"> Opmerkingen:
                        <br/>
                        <textarea name="comments"
                                  id="comments"
                                  cols="50"
                                  rows="5"
                                  value={commentsValue}
                                  onChange={(e) => setCommentsValue(e.target.value)}
                        ></textarea>
                    </label>
                    <label htmlFor="voorwaarden">
                        <input
                            type="checkbox"
                            id="voorwaarden"
                            name="voorwaarden-akkoord"
                            value={newsletterValue}
                            onChange={(e) => setNewsletterValue(!newsletterValue)}

                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <br/>
                    <br/>
                    <button
                        type="submit"
                        onClick={handleSubmit}

                    >
                        Versturen
                    </button>
                </form>
            </main>


        </>
    );
}

export default App;
