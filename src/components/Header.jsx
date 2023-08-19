import React from "react";

function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
};

//if we didn't get any props from the parent component, we can use default props

Header.defaultProps = {
    title : "To Do List App"
};

export default Header;
