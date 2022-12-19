import {Product} from './products'

interface InventoryItem {
    product: Product,
    quantity: number
}

let inventory:InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
]

export function calcInventoryValue(array:InventoryItem[]) : number {
    let totalValue = 0;

    for(let i = 0; i < array.length; i++) {
        totalValue += (array[i].product.price * array[i].quantity)
    }

    return totalValue
}

console.log(calcInventoryValue(inventory));