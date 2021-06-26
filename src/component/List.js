import React from 'react';
import Item from './Item';

function List ({list}){
    console.log("List rendered ...")
    return list.map(item=><Item key={item.name} {...item}/>);

}

export default List;