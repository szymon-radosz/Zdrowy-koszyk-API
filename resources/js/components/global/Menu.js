import React, { useContext } from "react";
import logo from "./../../../assets/images/logo.png";
import { MainContext } from "./../MainContext";
import { slide as MenuBurger } from "react-burger-menu";

const Menu = () => {
    const context = useContext(MainContext);

    return (
        <div className="page__main-section--top-panel">
            <div className="top-panel__left--container">
                <img
                    src={logo}
                    onClick={() => {
                        context.handleChangePath("");
                    }}
                />
            </div>
            {/* <div className="top-panel__right--container">
                <p>Wyszukiwarka produktów</p>
            </div> */}
            <MenuBurger right>
                <p onClick={() => context.handleChangePath("")}>HOME</p>
                <p onClick={() => context.handleChangePath("wyszukiwarka")}>
                    WYSZUKIWARKA
                </p>
            </MenuBurger>
        </div>
    );
};

export default Menu;
