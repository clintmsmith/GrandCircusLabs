import { Item } from "../models/Item";

export interface OrderContextModel {
    order: Item[],
    addItem: (item:Item) => void,
    removeItem: (id:string) => void,
};