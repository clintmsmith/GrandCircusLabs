import { useContext } from 'react';
import OrderContext from "../../context/OrderContext";
import "./header.css";

export function Header(){

    const { order } = useContext(OrderContext)

    return (
        <div className="Header">
            <h1>Sunny Side Up</h1>
            <p>Order Count: { order.length }</p>
        </div>
    );
};