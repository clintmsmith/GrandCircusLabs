import { Router, Request, Response} from "express";
import { maxHeaderSize } from "http";
import { Item } from "./item";

// Hard Coded data (you would usually pull this from a database)
let itemArray:Item[] = [
    {id: 1, quantity: 20, price: 10, product: "Eggs", isActive: true},
    {id: 2, quantity: 40, price: 7, product: "Milk", isActive: true},
    {id: 3, quantity: 35, price: 4, product: "Bread", isActive: true},
    {id: 4, quantity: 15, price: 9, product: "Sugar", isActive: true},
];

// In our previous example we used routes to direct our app to the correct code
// So where we had "app.get("items/:id", what would happen if we had another route
// for customers?  Then we would have to write additional code "app.get("customers")",
// but that would quickly get huge and be hard to organize.  A router helps us get around that.
export const itemRouter = Router();

// The basic item router looks like this:
// itemRouter.get("/", async () => {
// })


// Problem #1: GET /cart-items
// The Promise is expected a 'type' and so in the <> we say expect a Response
itemRouter.get("/", async (req:Request, res:Response) : Promise<Response> => {
    // If the parameter "maxPrice" is not undefined (I have been given a value),
    // Then filter the itemArray by the value provided
    // If the parameter "maxPrice" is undefined, then just return the whole itemArray
    if(req.query.maxPrice !== undefined){
        let underArray = itemArray.filter((x) => x.price <= Number(req.query.maxPrice) && x.isActive);
        return res.status(200).json(underArray);
    } else if(req.query.prefix !== undefined){
        let startsWithArray = itemArray.filter((x) => x.product.startsWith(String(req.query.prefix)) && x.isActive);
        return res.status(200).json(startsWithArray);
    } else if(req.query.pageSize !== undefined){
        let itemsByPageSizeLimit = itemArray.slice(0, Number(req.query.pageSize));
        return res.status(200).json(itemsByPageSizeLimit);
    } else {
        return res.status(200).json(itemArray.filter((x) => x.isActive));
    }
});


// Problem #2: GET /cart-items/:id
itemRouter.get("/:id", async (req:Request, res:Response) : Promise<Response> => {
        let itemIWantToFind = itemArray.find((x) => x.id === Number(req.params.id) && x.isActive);
        
        if(itemIWantToFind === undefined){
            return res.status(404).send("ID not found");
        } else {
            return res.status(200).json(itemIWantToFind);
        };
});


// Problem 3: POST /cart-items
itemRouter.post("/", async (req:Request, res:Response) : Promise<Response> => {
    let newItem:Item = {
        id: GetNextId(),
        product: String(req.body.product),
        price: Number(req.body.price),
        quantity: Number(req.body.quantity),
        isActive: true,
    };

    itemArray.push(newItem);

    // It is good form to return the 'newItem' so client can use it,
    // but in some cases you may just return the status
    return res.status(201).json(newItem);

    // Note that for simplicity's sake we don't have any error checking built in that 
    // items aren't undefined and that numbers aren't entered as strings + vice versa,
    // But be aware of that
});


// Problem 4: PUT /cart-items/:id
itemRouter.put("/:id", async (req:Request, res:Response): Promise<Response> => {
    // Find the item by the id
    let itemIWantToChange = itemArray.find((x) => x.id === Number(req.params.id) && x.isActive);

    // Update the properties of the item based on what is sent in the body of the request
    if(itemIWantToChange !== undefined){
        itemIWantToChange.quantity = Number(req.body.quantity);
        itemIWantToChange.price = Number(req.body.price);
        itemIWantToChange.product = String(req.body.product);
    // Return a status of 200, with the updated item in JSON format
        return res.status(200).json(itemIWantToChange);
    } else {
        return res.status(404).send("I'm unable to locate that ID")
    };
});


// Example Test Cases: DELETE /cart-items/:id
itemRouter.delete("/:id", async (req:Request, res:Response): Promise<Response> => {
    let itemIWantToDelete = itemArray.find((x) => x.id === Number(req.params.id) && x.isActive);

    if(itemIWantToDelete !== undefined){
        itemArray.splice(itemIWantToDelete.id-1, 1);
        // return res.status(204).send("Item removed");
        return res.status(200).json(itemArray);
    } else {
        return res.status(204).send("I'm unable to locate that ID");
    };
});

// Jonathan's version
// Basically the same thing, but used filter instead of splice
// I started doing this earlier, but needed to flip === to !== so it was deleting everything but that id.
// Mine was deleting the id provided because it was equal
// itemRouter.delete("/:id", async (req:Request, res:Response): Promise<Response> => {
//     let itemFound = itemArray.find((x) => x.id === Number(req.params.id) && x.isActive);

//     if(itemFound === undefined){
//         return res.status(404).send("Who date");
//     } else {
//         itemArray = itemArray.filter((x) => x.id !== Number(req.params.id) && x.isActive);
//         return res.status(204).send("Deleted");
//     };
// });

// Soft Delete version
// itemRouter.delete("/:id", async (req:Request, res:Response): Promise<Response> => {
//     let itemFound = itemArray.find((x) => x.id === Number(req.params.id) && x.isActive);

//     if(itemFound === undefined){
//         return res.status(404).send("Who date");
//     } else {
//         // We removed the filter above, which modifies the array and deletes the item
//         // and instead just changed the isActive property from 'true' to 'false'
//         itemFound.isActive = false;
//         console.log(itemArray);
//         return res.status(204).send("Deleted");
//     };
// });




//Helper function to get the next ID when we POST a new item
function GetNextId(){
    return Math.max(...itemArray.map((x) => x.id)) + 1;
}