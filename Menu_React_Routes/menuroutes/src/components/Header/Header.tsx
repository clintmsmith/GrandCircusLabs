import { useContext } from 'react';
import OrderContext from "../../context/OrderContext";
import "./header.css";

export function Header(){

    const { order } = useContext(OrderContext)

    return (
        <div className="Header">
            <h1>Sunny Side Up</h1>
            <img src="https://www.svgrepo.com/download/233591/breakfast-bacon.svg" alt="" />
            <p>Order Count: { order.length }</p>
        </div>
    );
};