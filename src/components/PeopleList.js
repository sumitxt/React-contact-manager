import React from 'react';

const PeopleList = (props) => {
    const arr=props.data;
    const listItems=arr.map((val,index)=>
        <li key={index}>{val}</li>
    );
    return (
        <div>
                <ul>{listItems}</ul>
        </div>
    );
};

export default PeopleList;