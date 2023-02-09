import { useState } from "react";
import { menuData } from "../../data/MenuData";
import { Item } from "../../models/Item";
import { MenuItem } from "../MenuItem";
import "./menuList.css";

export function MenuList(){
    const [menuList, setMenuList] = useState<Item[]>(menuData);
    
    return (
        <div className="MenuList">
            { menuList.map((item) => <MenuItem item={item} key={item.id} />) }
        </div>
    );
};