import React, {useContext} from "react";
import logo from "./../../../assets/images/logo.png"
import {MainContext} from "./../MainContext"

const Menu = () => {
    const context = useContext(MainContext);

    return(
            <div className="page__main-section--top-panel">
                <div className="top-panel__left--container">
                    <img 
                        src={logo} 
                        onClick={() => {
                            context.handleChangePath("")
                        }}
                    />
                </div>
                <div className="top-panel__right--container">
                    <p onClick={() => context.handleChangePath("wyszukiwarka")}>Wyszukiwarka produktów</p>
                </div>
            </div>
    )
}

export default Menu;