import React from "react";

const NavBar = (props) => {
    return (
        <header className="App-header">
                <img
            src='https://i.pinimg.com/564x/57/9e/d8/579ed87d68e297b04a2f2d96e6c10ebd.jpg'
            style={{ width: "100px", height: "100px" }}
            className="App-logo"
            alt="logo"
            />
            {props.navItems.map((navItem, idx) =>
            <a key={idx} href={navItem.url}>{navItem.name}</a>
            )}
        </header>
    )
}

export default NavBar