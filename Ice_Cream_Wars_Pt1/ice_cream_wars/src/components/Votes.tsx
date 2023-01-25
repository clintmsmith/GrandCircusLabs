import { useState } from 'react';
import '../css/Votes.css';

export function Votes(){
    const [chocolateVotes, setChocolateVotes] = useState<number>(0);
    const [vanillaVotes, setVanillaVotes] = useState<number>(0);
    const [strawberryVotes, setStrawberryVotes] = useState<number>(0);

    function getTotal(){
        return chocolateVotes + vanillaVotes + strawberryVotes;
    };

    function displayPercentage(n:number, total:number){
        if(total === 0){
            return '0.0%'
        } else {
            return ((n / total)*100).toFixed(1) + "%";
        }

    }
    
    return (
        <div className="Votes">
            <h2>Vote</h2>
            <div className="button-bar">
                <button className="button-vote-chocolate" onClick={() => setChocolateVotes(chocolateVotes + 1)}>Chocolate</button>
                <button className="button-vote-vanilla" onClick={() => setVanillaVotes(vanillaVotes + 1)}>Vanilla</button>
                <button className="button-vote-strawberry" onClick={() => setStrawberryVotes(strawberryVotes + 1)}>Strawberry</button>
            </div>
            {/* While there are no votes we don't want the bar to display */}
            {/* Once votes are added, then we want the bar graph to display */}
            {/* This is known as 'conditional rendering' */}
            
            { getTotal() === 0 ? 
            <>
            <p>No one has voted yet!</p>
            </>
            : 
            <>
            <p><label>Chocolate</label> {chocolateVotes} ({displayPercentage(chocolateVotes, getTotal())})</p>
            <progress className="progressChocolate" value={chocolateVotes / getTotal()}></progress>
            <p><label>Vanilla</label> {vanillaVotes} ({displayPercentage(vanillaVotes, getTotal())})</p>
            <progress className="progressVanilla" value={vanillaVotes / getTotal()}></progress>
            <p><label>Strawberry</label> {strawberryVotes} ({displayPercentage(strawberryVotes, getTotal())})</p>
            <progress className="progressStrawberry" value={strawberryVotes / getTotal()}></progress>
            </>
            }
        </div>
    );
};