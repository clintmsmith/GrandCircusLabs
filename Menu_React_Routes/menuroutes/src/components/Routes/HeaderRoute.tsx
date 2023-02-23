import { Link } from "react-router-dom";

export function HeaderRoute(){
    return (
        <div>
            <Link to={"/menu"}>Menu</Link>
        </div>
    );
};