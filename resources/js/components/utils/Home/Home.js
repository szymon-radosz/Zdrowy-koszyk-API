import React, { useState, useEffect, useContext } from "react";
import phoneHeader from "./../../../../assets/images/phone-header.png";
import appStore from "./../../../../assets/images/appStore.png";
import googlePlay from "./../../../../assets/images/googlePlay.png";
import Head from "./../../global/Head";
import Footer from "./../../global/Footer";
import { MainContext } from "./../../MainContext";
import Menu from "./../../global/Menu";

const Home = () => {
    const [intervalId, setIntervalID] = useState(0);
    const [activeDesctiption, setActiveDescription] = useState(0);
    const [activeCustomQueue, setActiveCustomQueue] = useState(false);

    const handleActiveDesctiption = customClickParameter => {
        clearInterval(intervalId);
        let active;

        if (customClickParameter) {
            setActiveCustomQueue(true);
            setActiveDescription(customClickParameter);
            active = customClickParameter;
        } else if (!activeCustomQueue) {
            active = activeDesctiption;
        }

        setIntervalID(
            setInterval(() => {
                setActiveCustomQueue(false);
                if (active === 5) {
                    setActiveDescription(0);
                    active = 0;
                } else {
                    setActiveDescription(active);
                    active += 1;
                }
            }, 8000)
        );
    };

    useEffect(() => {
        handleActiveDesctiption();
    }, []);

    return (
        <>
            <Head title="Zdrowy Koszyk - darmowy skaner składu produktów" />

            <div className="page__main-section--container">
                <div className="page__main-section--wrapper">
                    <Menu forceSearchPath={false} />

                    <div className="page__main-section--content">
                        <div className="page__main-section--content-left">
                            <h1>Zdrowy Koszyk</h1>
                            <h2>Darmowy skaner składu produktów</h2>

                            <div className="page__main-section--divider"></div>

                            <h3>Skanuj zakupy i dbaj o swoje zdrowie</h3>
                            <div className="homepage__download--btn-container">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.zdrowykoszykapp"
                                    target="_blank"
                                    title="Pobierz z Google Play"
                                >
                                    <img
                                        className="shop__icon"
                                        src={googlePlay}
                                    />
                                </a>

                                <img className="shop__icon" src={appStore} />
                            </div>
                        </div>
                        <div className="page__main-section--content-right">
                            <img src={phoneHeader} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage__how-it-works-section--container">
                <div className="homepage__how-it-works-section--wrapper">
                    <div className="homepage__section-header__container">
                        <h4>Jak to działa?</h4>
                        <div className="homepage__section-header__divider"></div>
                    </div>
                    <div className="homepage__how-it-works-section--points-container">
                        <div
                            className={`homepage__single-point--container ${activeDesctiption ===
                                0 && "active-description"}`}
                            onClick={() => {
                                handleActiveDesctiption(0);
                            }}
                        >
                            <p>1</p>
                        </div>
                        <div
                            className={`homepage__single-point--container ${activeDesctiption ===
                                1 && "active-description"}`}
                            onClick={() => {
                                handleActiveDesctiption(1);
                            }}
                        >
                            <p>2</p>
                        </div>
                        <div
                            className={`homepage__single-point--container ${activeDesctiption ===
                                2 && "active-description"}`}
                            onClick={() => {
                                handleActiveDesctiption(2);
                            }}
                        >
                            <p>3</p>
                        </div>
                        <div
                            className={`homepage__single-point--container ${activeDesctiption ===
                                3 && "active-description"}`}
                            onClick={() => {
                                handleActiveDesctiption(3);
                            }}
                        >
                            <p>4</p>
                        </div>
                        <div
                            className={`homepage__single-point--container ${activeDesctiption ===
                                4 && "active-description"}`}
                            onClick={() => {
                                handleActiveDesctiption(4);
                            }}
                        >
                            <p>5</p>
                        </div>
                    </div>
                    <div className="homepage__how-it-works-section--description-container">
                        {activeDesctiption === 0 && (
                            <div className="homepage__single-description--container">
                                <p>Zeskanuj kod kreskowy</p>
                            </div>
                        )}
                        {activeDesctiption === 1 && (
                            <div className="homepage__single-description--container">
                                <p>
                                    W przypadku znalezienia produktu masz dostęp
                                    do jego składu
                                </p>
                            </div>
                        )}
                        {activeDesctiption === 2 && (
                            <div className="homepage__single-description--container">
                                <p>
                                    Spośród składników widoczne są szkodliwe
                                    oznaczone kolorem czerwonym, niekorzystne
                                    kolorem żółtym i prozdrowotne zielonym wraz
                                    z opisem i źródłem informacji
                                </p>
                            </div>
                        )}
                        {activeDesctiption === 3 && (
                            <div className="homepage__single-description--container">
                                <p>
                                    W przypadku nieznalezienia produktu,
                                    zeskanuj jego skład i wyślij do weryfikacji,
                                    aby przy kolejnym zeskanowaniu w przyszłości
                                    inni użytkownicy widzieli jego skład
                                </p>
                            </div>
                        )}
                        {activeDesctiption === 4 && (
                            <div className="homepage__single-description--container">
                                <p>
                                    Zbaj o swoje zdrowie. Aplikacja nie wymaga
                                    rejestracji i jest w pełni darmowa. Została
                                    stworzona przez{" "}
                                    <a
                                        href="https://tech-bulb.com/"
                                        target="_blank"
                                    >
                                        autora
                                    </a>
                                    , aby poszerzać jego wiedzę w tworzeniu
                                    oprogramowania i nie ma na celu pozyskiwania
                                    korzyści majątkowych
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="homepage__download--container">
                <div className="homepage__download--wrapper">
                    <div className="homepage__section-header__container">
                        <h4>Pobierz aplikację na swój telefon</h4>
                        <div className="homepage__section-header__divider"></div>
                    </div>
                    <div className="homepage__download--btn-container">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.zdrowykoszykapp"
                            target="_blank"
                            title="Pobierz z Google Play"
                        >
                            <img className="shop__icon" src={googlePlay} />
                        </a>
                        <img className="shop__icon" src={appStore} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
