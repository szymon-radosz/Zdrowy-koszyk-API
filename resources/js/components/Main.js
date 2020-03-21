import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AppComponent } from "./../utils/styledComponents/AppComponent";
import Dashboard from "./utils/Dashboard/Dashboard";
import Login from "./utils/Login/Login";
import { MainContext } from "./MainContext";
import history from "./History";
import Products from "./utils/Dashboard/Products/Products";
import ProductsToAccept from "./utils/Dashboard/ProductsToAccept/ProductsToAccept";
import Alert from "./utils/Alert/Alert";
import RegisterAdmin from "./utils/RegisterAdmin/RegisterAdmin";
import Home from "./utils/Home/Home";
import PrivacyPolicy from "./utils/PrivacyPolicy/PrivacyPolicy";
import SearchProducts from "./utils/SearchProducts/SearchProducts";
import ProductDetails from "./utils/ProductDetails/ProductDetails";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userLoggedIn: false,
            showSidebarText: false,
            activeMenuSection: "",
            // APP_URL: "http://127.0.0.1:8080",
            // API_URL: "http://127.0.0.1:8080/api/",
            APP_URL: "http://zdrowy-koszyk.live/",
            API_URL: "http://zdrowy-koszyk.live/api/",
            showLoader: false,
            alertMessage: "",
            alertStatus: "",
            token: "",
            allowedPaths: [
                "wyszukiwarka",
                "login-dashboard",
                "register-dashboard",
                "polityka-prywatnosci",
                "produkt"
            ],
            allowRedirect: false,
            redirectedPath: ""
        };

        this.history = history;

        this.routes = [
            {
                path: "/dashboard",
                name: "Dashboard",
                Component: Dashboard
            },
            {
                path: "/login-dashboard",
                name: "Login",
                Component: Login
            },
            {
                path: "/register-dashboard",
                name: "RegisterAdmin",
                Component: RegisterAdmin
            },
            {
                path: "/products",
                name: "Products",
                Component: Products
            },
            {
                path: "/products-to-accept",
                name: "ProductsToAccept",
                Component: ProductsToAccept
            },
            {
                path: "/wyszukiwarka",
                name: "SearchProducts",
                Component: SearchProducts
            },
            {
                path: "/produkt/:barcode",
                name: "ProductDetails",
                Component: ProductDetails
            },
            {
                path: "/polityka-prywatnosci",
                name: "PrivacyPolicy",
                Component: PrivacyPolicy
            },
            {
                path: "/",
                name: "Home",
                Component: Home
            }
        ];
    }

    checkAllowedPath = path => {
        const allowedPaths = this.state.allowedPaths;

        if (allowedPaths.includes(path.split("/")[1])) {
            //console.log(["path", path, path.split("/")[1]]);
            return <Redirect to={path} />;
        } else {
            return <Redirect to="/" />;
        }
    };

    setToken = token => {
        this.setState({ token });
    };

    setUserLoggedIn = status => {
        this.setState({ userLoggedIn: status });
    };

    handleLogout = () => {
        localStorage.clear();
        this.setState({ userLoggedIn: false });
    };

    handleShowAlert = (message, status) => {
        this.setState({ alertMessage: message, alertStatus: status });

        setTimeout(() => {
            this.setState({ alertMessage: "", alertStatus: "" });
        }, 4000);
    };

    handleShowLoader = status => {
        this.setState({ showLoader: status });
    };

    handleShowSidebarText = () => {
        this.setState({ showSidebarText: !this.state.showSidebarText });
    };

    handlAactiveMenuSection = text => {
        this.setState({ activeMenuSection: text });
    };

    handleChangePath = path => {
        //console.log(["chandleChangePath", path]);
        const allowedPaths = this.state.allowedPaths;

        if (allowedPaths.includes(path.split("/")[0])) {
            this.setState({ allowRedirect: true, redirectedPath: path });
        } else {
            this.setState({ allowRedirect: true, redirectedPath: "/" });
        }
    };

    checkTokenExpiration = status => {
        if (status === 401) {
            this.handleShowAlert("Token invalid", "danger");
            this.handleLogout();
        }
    };

    componentDidMount = () => {
        if (localStorage.getItem("token")) {
            this.setState({
                token: localStorage.getItem("token"),
                userLoggedIn: true
            });
        }
    };

    getUrlPathname = () => {
        return window.location.pathname;
    };

    render() {
        const {
            userLoggedIn,
            showSidebarText,
            activeMenuSection,
            API_URL,
            APP_URL,
            showLoader,
            alertMessage,
            alertStatus,
            token,
            allowRedirect,
            redirectedPath
        } = this.state;

        const lastUrlSegment = this.getUrlPathname();
        //console.log(["lastUrlSegment", lastUrlSegment]);

        return (
            <MainContext.Provider
                value={{
                    handleChangePath: this.handleChangePath,
                    userLoggedIn: userLoggedIn,
                    showSidebarText: showSidebarText,
                    handleShowSidebarText: this.handleShowSidebarText,
                    activeMenuSection: activeMenuSection,
                    handlAactiveMenuSection: this.handlAactiveMenuSection,
                    API_URL: API_URL,
                    APP_URL: APP_URL,
                    showLoader: showLoader,
                    handleShowLoader: this.handleShowLoader,
                    handleShowAlert: this.handleShowAlert,
                    setUserLoggedIn: this.setUserLoggedIn,
                    token: token,
                    setToken: this.setToken,
                    handleLogout: this.handleLogout,
                    checkTokenExpiration: this.checkTokenExpiration,
                    checkAllowedPath: this.checkAllowedPath
                }}
            >
                {alertMessage && alertStatus && (
                    <Alert message={alertMessage} status={alertStatus} />
                )}

                <div className="container-sm app__container">
                    <AppComponent>
                        <Router history={history}>
                            {userLoggedIn && token ? (
                                <Redirect to="dashboard" />
                            ) : (
                                this.checkAllowedPath(lastUrlSegment)
                            )}

                            {allowRedirect && redirectedPath && (
                                <Redirect to={redirectedPath} />
                            )}

                            <Switch>
                                {this.routes.map(
                                    ({ path, name, Component }) => {
                                        return (
                                            <Route exact key={name} path={path}>
                                                <Component />
                                            </Route>
                                        );
                                    }
                                )}
                            </Switch>
                        </Router>
                    </AppComponent>
                </div>
            </MainContext.Provider>
        );
    }
}

export default Main;
