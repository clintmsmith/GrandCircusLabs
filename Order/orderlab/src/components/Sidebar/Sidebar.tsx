import { useContext } from 'react';
import OrderContext from "../../context/OrderContext";
import "./sidebar.css";

export function Sidebar(){
    const { order } = useContext(OrderContext)

    return (
        <div className="Sidebar">
            <div className="order-total">
                <p>Total: ${order.reduce((prev, item) => prev + item.price, 0).toFixed(2)}</p>
            </div>
            <div className="order-items">
                <ol>
                    {order.map((item) => <li key={item.id}><p>{item.name} ${item.price.toFixed(2)}</p></li>)}
                </ol>
            </div>
            <div className="thank-you">
                <p>Thank you for supporting a local business! Come again soon!</p>
            </div>
        </div>
    );
};