import React from 'react';

const PeopleList = (props) => {
    const arr = props.data;
    const listItems = arr.map((val, index) =>
        <li key={index}>{val}</li>
    );
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="table"></div>
                    <tr>{listItems}</tr>
                </div>
            </div>
        </div>
    );
};

export default PeopleList;