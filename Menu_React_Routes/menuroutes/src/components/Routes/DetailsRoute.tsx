import { useParams } from "react-router-dom";
import { menuData } from "../../data/MenuData";

export function DetailsRoute(){
    let { id } = useParams();

    let item = menuData.find((item) => item.id === id)
    
    return (
        <div>
            { item !== undefined &&
            <ul>
                <li>{item.name}</li>
                <li>{item.description}</li>
            </ul>
            }
        </div>
    );
};