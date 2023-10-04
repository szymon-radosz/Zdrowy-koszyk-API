import React from "react";
import { Helmet } from "react-helmet";
import favicon from "./../../../assets/images/favicon.png";

const Head = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta
                name="author"
                content="Szymon Radosz - radoszszymon.usermd.net"
            />
            <meta
                name="description"
                content="Skanuj zakupy i dbaj o swoje zdrowie"
            />
            <meta
                name="keywords"
                content="skaner produktów, zdrowie, dieta, odżywianie, zakupy"
            />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <title>zielonyparagon.pl - Darmowy skaner składu produktów</title>

            <link
                href="https://fonts.googleapis.com/css?family=Nunito:200,600"
                rel="stylesheet"
                type="text/css"
            />
            <link rel="shortcut icon" src={favicon} />

            <link rel="stylesheet" href="/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/style.css" />
            <link rel="stylesheet" href="/css/responsive.css" />
        </Helmet>
    );
};

export default Head;
