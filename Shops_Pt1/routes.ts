import { Router, Request, Response } from "express";
import { Shop } from "./shop";

let shopArray:Shop[] = [
    {id: 1, name: "Pepper's Pizza", rating: 4.5},
    {id: 2, name: "Clive's Chives", rating: 3.4},
    {id: 3, name: "Betty's Brews", rating: 4.3},
    {id: 4, name: "Sylvester's Shoes", rating: 3.8},
    {id: 5, name: "Teddy's Tunes", rating: 4.7},
];

export const shopRouter = Router();

// GET - all Shops
// shopRouter.get("/", async (req:Request, res:Response) : Promise<Response> => {
//     if(req.query.minRating !== undefined){
//         let minRatingArray = shopArray.filter((x) => x.rating > Number(req.query.minRating));
//         return res.status(200).json(minRatingArray);
//         }
    
//     return res.status(200).json(shopArray);
// });


shopRouter.get("/", async (req:Request, res:Response) : Promise<Response> => {
    // I was trying to write it so if the minRating exceeded any shop's rating, so resulted in an empty array,
    // to return a message letting the user know / Response Code 204, but for some reason couldn't get it to work
    if(req.query.minRating !== undefined){
        let minRatingArray = shopArray.filter((x) => x.rating >= Number(req.query.minRating));

        if(minRatingArray.length === 0){
            return res.status(404).send(`No shops found with Rating greater than ${req.query.minRating}`);
        } else {
        return res.status(200).json(minRatingArray);
        };
    };

    if(req.query.prefix !== undefined){
        let startsWithArray = shopArray.filter((x) => x.name.startsWith((String(req.query.prefix)).toUpperCase()));
        return res.status(200).json(startsWithArray);
    };

    return res.status(200).json(shopArray);
});


// GET - Shop by Id
shopRouter.get("/:id", async (req:Request, res:Response) : Promise<Response> => {
    let shopIWantToFind = shopArray.find((x) => x.id === Number(req.params.id));

    if(shopIWantToFind === undefined) {
        return res.status(404).send(`error: Shop not found: ${req.params.id}`);
    } else {
        return res.status(200).json(shopIWantToFind);
    };
});


// POST
shopRouter.post("/", async (req:Request, res:Response) : Promise<Response> => {
    let newShop:Shop = {
        id: GetNextId(),
        name: String(req.body.name),
        rating: Number(req.body.rating),
    };

    shopArray.push(newShop);

    return res.status(201).json(newShop);
})


// PUT /shops/:id
shopRouter.put("/:id", async (req:Request, res:Response) : Promise<Response> => {
    let shopIWantToChange = shopArray.find((x) => x.id === Number(req.params.id));

    if(shopIWantToChange !== undefined){
        shopIWantToChange.name = String(req.body.name);
        shopIWantToChange.rating = Number(req.body.rating);
        return res.status(200).json(shopIWantToChange);
    } else {
        return res.status(404).send(`I'm unable to locate ID ${req.params.id}`);
    };
});


// DELETE /shops/:id
shopRouter.delete("/:id", async (req:Request, res:Response) : Promise<Response> => {
    let shopIWantToDelete = shopArray.find((x) => x.id === Number(req.params.id));

    if(shopIWantToDelete === undefined){
        return res.status(404).send(`I'm unable to locate ID ${req.params.id}`);
    } else {
        shopArray = shopArray.filter((x) => x.id !== Number(req.params.id));
        return res.status(204).send("Deleted")
    };
});

//
// Helper function to iterate the next ID value
function GetNextId(){
    return Math.max(...shopArray.map((x) => x.id)) + 1;
}