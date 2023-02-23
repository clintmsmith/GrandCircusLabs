import { useState } from "react";
import { Item } from "../../models/Item";
import { menuData } from "../../data/MenuData";
import { BasicItem } from "./BasicItem";

export function MenuRoute () {
    const [items] = useState<Item[]>(menuData);
    
  return (
    <div>
      { items.map((item) => <BasicItem item={item} />) }
    </div>
  );
}