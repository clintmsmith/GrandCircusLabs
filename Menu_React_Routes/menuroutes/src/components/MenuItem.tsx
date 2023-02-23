import { Item } from "../models/Item";
import { useContext } from 'react';
import OrderContext from "../context/OrderContext";

interface IMenuItemProps {
    item: Item,
};

export function MenuItem(props: IMenuItemProps){
    let {item} = props;

    const { addItem, removeItem } = useContext(OrderContext)

    function displayBoolean(value: boolean){
        return value ? "Yes" : "No";
    };
    
    return (
        <div className="MenuItem">
            <div className="MenuItem-main">
                <h3>{item.name}</h3>
                <ul>
                    <li>Price : ${item.price.toFixed(2)}</li>
                    <li>Description : {item.description}</li>
                    <li>Calories : {item.calories}</li>
                    <li>Vegetarian ? : {displayBoolean(item.vegetarian)}</li>
                </ul>
                <button className="button-add" onClick={() => addItem(item)}>Add Item</button>
                <button className="button-remove" onClick={() => removeItem(item.id)}>Remove Item</button>
            </div>
            <div className="MenuItem-image">
                <img src={item.image} />
            </div>
        </div>
    );
};