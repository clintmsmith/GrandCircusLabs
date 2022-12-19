export interface Product {
    name: string,
    price: number
}

let products:Product[] = [
    {name: "Apple", price: 1.79},
    {name: "Banana", price: 0.99},
    {name: "Orange", price: 0.89}
]

export function calcAverageProductPrice(array:Product[]) : number {
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum += array[i].price
    }

    let average = sum / array.length;
    let roundedAverage = Number(average.toFixed(2));
    return roundedAverage;
}

console.log(calcAverageProductPrice(products));
