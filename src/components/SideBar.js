import React from 'react';

export const SideBar = (props) => {
    const {subRedits} = props;
    return (
        <div className="list">
            <ul>
                {subRedits && subRedits.map((element, key) => <li onClick={() => props.handleNameClick(element)} key={key}><a href="#">{element}</a></li>)}
            </ul>
        </div>
    )
}