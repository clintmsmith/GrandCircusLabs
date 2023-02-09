import { useEffect, useState } from "react";
import { Quote } from "../models/Quote";
import { GetQuoteData } from "../services/QuoteService";
import backgroundImage from "../assets/aesthetic-clouds.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import { Card, CardImgOverlay, CardText } from "reactstrap";

export function Quotes () {
    const [quote, setQuote] = useState<Quote[]>();

    useEffect(() => {
        GetQuoteData().then(data => setQuote(data))
    }, []);

    useEffect(() => {
        console.log(quote)
    }, [quote]);

    // Used slice to limit the number of cards mapped to our App site
    let displayQuotes = quote?.slice(0,10).map((quote) => 
        <Card inverse className="cards">
        <CardImgOverlay>
        <CardText>
            <p className="quote-text">{`"` + quote.text + `"`}</p>
            <h4 className="quote-author">{quote.author ? "- " + quote.author : "- Author Unknown"}</h4>
        </CardText>
        </CardImgOverlay>
        </Card>
    );

    return (
        <div className="QuoteAPI">
            <div className="quotes-header">
                <h1>Inspirational Quotes</h1>
            </div>
            <div className="card-container">
                <img src={backgroundImage} />
                { quote !==undefined && <>{displayQuotes}</>}
            </div>
        </div>
    )
}