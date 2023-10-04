import React, { useContext } from "react";
import logo from "./../../../assets/images/logo-new.png";
import { MainContext } from "./../MainContext";
import { slide as MenuBurger } from "react-burger-menu";

const Menu = () => {
    const context = useContext(MainContext);

    return (
        <div className="page__main-section--top-panel">
            <div className="top-panel__wrapper">
                <div className="top-panel__left--container">
                    <img
                        src={logo}
                        onClick={() => {
                            context.handleChangePath("");
                        }}
                    />
                </div>
                {/* <MenuBurger right>
                    <p onClick={() => context.handleChangePath("")}>START</p>
                    <p onClick={() => context.handleChangePath("wyszukiwarka")}>
                        WYSZUKIWARKA
                    </p>
                </MenuBurger> */}
            </div>
        </div>
    );
};

export default Menu;
