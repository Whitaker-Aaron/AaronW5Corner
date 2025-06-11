import { Fragment } from "react";
import { useState } from "react";

interface Props {
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void;
}


let selectedIndex = 0;


function ListGroup(props: Props) {

    const [selectedItemIndex, updateItemIndex] = useState(-1);
    //arr[0] // variable 
    //arr[1] // updater function

    const message =
        (
            <>
                <h1>{props.heading}</h1>
                <ul className="list-group">
                    {getItems(selectedItemIndex, updateItemIndex, props.items, props.onSelectItem)}
                </ul>
            </>
        )

    return message;
}

function getItems(selectedItemIndex, updateItemIndex, items, onSelectItem) {


    const handleClick = (index, item) => {
        console.log(index);
        updateItemIndex(index);
        onSelectItem(item);
    }

    const isHighlighted = (index) => {
        return selectedItemIndex === index ? 'list-group-item active' : 'list-group-item'
    }

    if (items.length === 0) return 'No names were found.';
    return items.map((item, index) =>
        <li
            className={isHighlighted(index)}
            key={item}
            onClick={() => handleClick(index, item)}>
            {item}
        </li >);
}

export default ListGroup;