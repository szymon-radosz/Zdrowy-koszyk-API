import React from "react";
import {Helmet} from "react-helmet";

const PrivacyPolicy = () => {
    return(
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="author" content="Szymon Radosz"/>
                <meta name="description" content="Zdrowy Koszyk - darmowy skaner składu produktów"/>
                <meta name="keywords" content="skaner produktów, zdrowie, dieta, odżywianie, zakupy"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <title>Zdrowy Koszyk - darmowy skaner składu produktów</title>

                <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css"/>
                {/* <link rel="shortcut icon" src="image/ico" href="/images/favicon.png" /> */}

                <link rel="stylesheet" href="/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="stylesheet" href="/css/responsive.css"/>
            </Helmet>

            <div>
                <p>Polityka prywatności - Zdrowy Koszyk</p>

                <div>
                    <p>1. Polityka prywatności</p>
                    <p>Użytkownik akceptuje wszystkie warunki i postanowienia przedstawione w niniejszej polityce prywatności poprzez instalację aplikacji mobilnej Zdrowy Koszyk, bądź używanie jej i korzystanie z oferowanych usług oraz funkcji w jakikolwiek sposób.</p>
                </div>

                <div>
                    <p>1. Dane Personalne</p>
                    <p>Nie są pobierane żadne pane personalne użytkowników. Aplikacja nie wymaga rejestracji i jest w pełni darmowa. Została stworzona przez autora, aby poszerzać jego wiedzę w tworzeniu oprogramowania i nie ma na celu pozyskiwania korzyści majątkowych</p>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;