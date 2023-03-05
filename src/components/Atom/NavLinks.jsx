import React from "react";

const NavLinks = (props) => {
    return (
        <li onClick={props.onClick}>
            <a className={props.className} href={props.links}>
                {props.children}
            </a>
        </li>
    );
}

export default NavLinks