// In TypeScript there is a similar thing called "interface"
// Later in classed we added the optional operator "?" with "hasBeenClimed"
// When we create a newMountain, this can be entered or not entered because we may not know
interface Mountain {
    name: string,
    height: number,
    hasBeenClimbed?: true
}

// Here we create (implement) a newMountain using the structure of interface
// Referencing the optional operator "?" above, you can see we don't have "hasBeenClimbed" here and TypeScript isn't angry with us
let newMountain:Mountain = {
    name: "Small",
    height: 100,
}

// With an array in TypeScript, you can only put Mountains inside this array via the Mountain interface
// Another way to do this is create a variable of the type Mountain, then reference those in the array
let mountains:Mountain[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];


// Option 1 - done with regular For Loop
export function findNameOfTallestMountain(array:Mountain[]) : string {
    let result:string = '';
    let newHeight:number = 0;
    for(let item of array){
        if(item.height > newHeight){
            newHeight = item.height;
            result = item.name;
        }
    }
    return result;
}

console.log(findNameOfTallestMountain(mountains));


// Option 2 - forEach Loop
// function findNameOfTallestMountain2(array:Mountain[]) : string {
//     if(mountains.length) {
//         let tallest: Mountain = mountains[0];
//         mountains.forEach((mountain) => {
//             if(mountain.height > tallest.height) {
//                 tallest = mountain;
//             }
//         });
//         return tallest.name;
//     } else {
//         return "";
//     }
// }

// console.log(findNameOfTallestMountain2(mountains));


// Option 3 - .reduce() method
// function findNameOfTallestMountain3(array:Mountain[]) : string {
//     let tallestMountain = mountains.reduce((prev, current) => (prev.height > current.height) ? prev: current);
//     return tallestMountain.name;
// }

// console.log(findNameOfTallestMountain3(mountains));
