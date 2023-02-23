import { OrderContextModel } from "./OrderContextModel";
import { createContext } from "react";

const defaultValue: OrderContextModel = {
    order: [],
    addItem: () => {},
    removeItem: () => {},
}

// Factory pattern
const OrderContext = createContext(defaultValue);

export default OrderContext;