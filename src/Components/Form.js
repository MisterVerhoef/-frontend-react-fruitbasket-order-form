import React from "react";

const Form =({handleSubmit, nameValue, setNameValue, lastNameValue, setLastNameValue,ageValue, setAgeValue,
              postcodeValue, setPostcodeValue, commentsValue, setCommentsValue, newsletterValue,
              setNewsletterValue, submitValue, setSubmitValue}) => {
    return(
        <>
        <form onSubmit={handleSubmit}>

            <label htmlFor="Voornaam">Voornaam:
                <input type="text"
                       id="Voornaam"
                       name="Voornaam"
                       value={nameValue}
                       onChange={(e) => setNameValue(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label htmlFor="Achternaam"> Achternaam:
                <input type="text"
                       id="Achternaam"
                       name="Achternaam"
                       value={lastNameValue}
                       onChange={(e) => setLastNameValue(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label htmlFor="Leeftijd">Leeftijd:
                <input type="text"
                       id="Leeftijd"
                       name="Leeftijd"
                       value={ageValue}
                       onChange={(e) => setAgeValue(e.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label htmlFor="Postcode"> Postcode:
                <input type="text"
                       id="Postcode"
                       name="Postcode"
                       value={postcodeValue}
                       onChange={(e) => setPostcodeValue(e.target.value)}
                />
            </label>
            <br/>

            <br/>
            <p>Bezorgfrequentie</p>
            <label htmlFor="dropdown-menu"></label>
            <select name="dropdown-menu" id="dropdown-menu">
                <option value="Iedere Week">Iedere Week</option>
                <option value="Om de week">Om de week</option>
                <option value="Iedere maand">Iedere maand</option>
            </select>
            <br/>
            <br/>

            <label htmlFor="recept-uitproberen-Nee">
                <input type="radio"
                       name="recept-uitproberen"
                       id="recept-uitproberen-Nee"
                       value="Nee"

                />Overdag
            </label>
            <label htmlFor="recept-uitproberen-Ja">
                <input
                    type="radio"
                    name="recept-uitproberen"
                    id="recept-uitproberen-Ja"
                    value="Ja"

                />'s Avonds
            </label>
            <br/>
            <br/>
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
            <br/>
            <br/>
            <label htmlFor="voorwaarden">
                <input
                    type="checkbox"
                    id="voorwaarden"
                    name="voorwaarden-akkoord"
                    checked="false"
                    value={newsletterValue}
                    onChange={(e) => setNewsletterValue(!newsletterValue)}

                />
                Ik ga akkoord met de voorwaarden
            </label>
            <br/>
            <br/>
            <button
                type="submit"
                value={submitValue}
                onChange={(e) => setSubmitValue(e.target.value)}
            >
                Versturen
            </button>
        </form>
        </>
    );
}

export default Form;