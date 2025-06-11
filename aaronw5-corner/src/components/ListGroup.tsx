import { Fragment } from "react";
import { useState } from "react";

let items = [
    'Aaron 1',
    'Aaron 2',
    'Aaron 3',
    'Aaron 4',
    'Aaron 5'
]

let selectedIndex = 0;


function ListGroup() {

    const [selectedItemIndex, updateItemIndex] = useState(-1);
    //arr[0] // variable 
    //arr[1] // updater function
    const message =
        (
            <>
                <h1>List: </h1>
                <ul className="list-group">
                    {getItems(selectedItemIndex, updateItemIndex)}
                </ul>
            </>
        )

    return message;
}

function getItems(selectedItemIndex, updateItemIndex) {


    const handleClick = (index) => {
        console.log(index);
        updateItemIndex(index);
    }

    const isHighlighted = (index) => {
        return selectedItemIndex === index ? 'list-group-item active' : 'list-group-item'
    }

    if (items.length === 0) return 'No names were found.';
    return items.map((item, index) =>
        <li
            className={isHighlighted(index)}
            key={item}
            onClick={() => handleClick(index)}>
            {item}
        </li >);
}

export default ListGroup;