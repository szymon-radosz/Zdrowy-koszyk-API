import React from "react";

const Footer = () => {
    let date = new Date().getFullYear();

    return (
        <div className="homepage__footer--container">
            <div className="homepage__footer--wrapper">
                <p>zielonyparagon.pl @{date}</p>
                <p>
                    <a
                        href="https://www.radoszszymon.usermd.net/"
                        title="Odwiedź moją stronę"
                        target="_blank"
                    >
                        Created by Szymon Radosz
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
