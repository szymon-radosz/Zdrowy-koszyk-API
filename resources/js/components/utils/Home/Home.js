import React, { useState, useEffect, useContext } from "react";
import phoneHeader from "./../../../../assets/images/phone-header.png";
import appStore from "./../../../../assets/images/appStore.png";
import googlePlay from "./../../../../assets/images/googlePlay.png";
import Head from "./../../global/Head";
import Footer from "./../../global/Footer";
import { MainContext } from "./../../MainContext";
import Menu from "./../../global/Menu";
import SearchProducts from "./../SearchProducts/SearchProducts";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
    const [intervalId, setIntervalID] = useState(0);
    const [activeDesctiption, setActiveDescription] = useState(1);
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
                if (active === 6) {
                    setActiveDescription(1);
                    active = 1;
                } else {
                    setActiveDescription(active);
                    active += 1;
                }
            }, 5000)
        );
    };

    useEffect(() => {
        handleActiveDesctiption();
    }, []);

    return (
        <>
            <Head title="Zdrowy Koszyk - darmowy skaner składu produktów" />

            <Menu forceSearchPath={false} />

            <div className="page__main-section--container">
                <div className="page__main-section--wrapper">
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

                                <a
                                    href="https://apps.apple.com/us/app/zdrowy-koszyk/id1502907248?l=pl&ls=1"
                                    target="_blank"
                                    title="Pobierz z App Store"
                                >
                                    <img
                                        className="shop__icon"
                                        src={appStore}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="page__main-section--content-right">
                            <img src={phoneHeader} />
                            <Link to="searchId" smooth={true}>
                                <button className="search-products__btn">
                                    Szukaj produktów
                                </button>
                            </Link>
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
                                1 && "active-description"}`}
                            onClick={() => {
                                handleActiveDesctiption(1);
                            }}
                        >
                            <p>1</p>
                        </div>
                        <div
                            className={`homepage__single-point--container ${activeDesctiption ===
                                2 && "active-description"}`}
                            onClick={() => {
                                handleActiveDesctiption(2);
                            }}
                        >
                            <p>2</p>
                        </div>
                        <div
                            className={`homepage__single-point--container ${activeDesctiption ===
                                3 && "active-description"}`}
                            onClick={() => {
                                handleActiveDesctiption(3);
                            }}
                        >
                            <p>3</p>
                        </div>
                        <div
                            className={`homepage__single-point--container ${activeDesctiption ===
                                4 && "active-description"}`}
                            onClick={() => {
                                handleActiveDesctiption(4);
                            }}
                        >
                            <p>4</p>
                        </div>
                        <div
                            className={`homepage__single-point--container ${activeDesctiption ===
                                5 && "active-description"}`}
                            onClick={() => {
                                handleActiveDesctiption(5);
                            }}
                        >
                            <p>5</p>
                        </div>
                    </div>
                    <div className="homepage__how-it-works-section--description-container">
                        {activeDesctiption === 1 && (
                            <div className="homepage__single-description--container">
                                <p>Zeskanuj kod kreskowy</p>
                            </div>
                        )}
                        {activeDesctiption === 2 && (
                            <div className="homepage__single-description--container">
                                <p>
                                    W przypadku znalezienia produktu masz dostęp
                                    do jego składu
                                </p>
                            </div>
                        )}
                        {activeDesctiption === 3 && (
                            <div className="homepage__single-description--container">
                                <p>
                                    Spośród składników widoczne są szkodliwe
                                    oznaczone kolorem czerwonym, niekorzystne
                                    kolorem żółtym i prozdrowotne zielonym wraz
                                    z opisem i źródłem informacji
                                </p>
                            </div>
                        )}
                        {activeDesctiption === 4 && (
                            <div className="homepage__single-description--container">
                                <p>
                                    W przypadku nieznalezienia produktu,
                                    zeskanuj jego skład i wyślij do weryfikacji,
                                    aby przy kolejnym zeskanowaniu w przyszłości
                                    inni użytkownicy widzieli jego skład
                                </p>
                            </div>
                        )}
                        {activeDesctiption === 5 && (
                            <div className="homepage__single-description--container">
                                <p>
                                    Zadbaj o swoje zdrowie. Aplikacja jest w
                                    pełni darmowa.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <SearchProducts />

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

                        <a
                            href="https://apps.apple.com/us/app/zdrowy-koszyk/id1502907248?l=pl&ls=1"
                            target="_blank"
                            title="Pobierz z App Store"
                        >
                            <img className="shop__icon" src={appStore} />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
