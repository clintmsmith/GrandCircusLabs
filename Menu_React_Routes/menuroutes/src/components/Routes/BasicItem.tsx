import * as React from 'react';
import { Link } from 'react-router-dom';
import { Item } from "../../models/Item";

interface IBasicItemsProps {
    item: Item
};

export function BasicItem(props: IBasicItemsProps){
       
    return (
        <div>
            <h2>{props.item.name}</h2>
            <ul>
                <li>{props.item.price}</li>
            </ul>
            <Link to={`/details/${props.item.id}`}>
                Details
            </Link>
        </div>
    )
};