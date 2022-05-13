import React from "react";

function Form(){
    return(
        <form>

            <label htmlFor="Voornaam">Voornaam:
                <input type="text" id="Voornaam" name="Voornaam"/>
            </label>
            <br/>
            <br/>
            <label htmlFor="Achternaam"> Achternaam:
                <input type="text" id="Achternaam" name="Achternaam"/>
            </label>
            <br/>
            <br/>
            <label htmlFor="Leeftijd">Leeftijd:
                <input type="text" id="Leeftijd" name="Leeftijd"/>
            </label>
            <br/>
            <br/>
            <label htmlFor="Postcode"> Postcode:
                <input type="text" id="Postcode" name="Postcode"/>
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
                <input type="radio" name="recept-uitproberen" id="recept-uitproberen-Nee" value="Nee"/>Overdag
            </label>
            <label htmlFor="recept-uitproberen-Ja">
                <input type="radio" name="recept-uitproberen" id="recept-uitproberen-Ja" value="Ja"/>'s Avonds
            </label>
            <br/>
            <br/>
            <label htmlFor="comments"> Opmerkingen:
                <br/>
                <textarea name="comments" id="comments" cols="50" rows="5"></textarea>
            </label>
            <br/>
            <br/>
            <label htmlFor="voorwaarden">
                <input type="checkbox" id="voorwaarden" name="voorwaarden-akkoord" checked="false"/>
                Ik ga akkoord met de voorwaarden
            </label>
            <br/>
            <br/>
            <button type="submit">Versturen</button>
        </form>
    );
};

export default Form;