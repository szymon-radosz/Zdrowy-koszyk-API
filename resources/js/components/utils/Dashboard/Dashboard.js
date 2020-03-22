import React, { Component } from "react";
import DashboardContainer from "./../DashboardContainer/DashboardContainer";
import { MainContext } from "./../../MainContext";
import Header from "./utils/Header";
import DashboardInfoRect from "./utils/DashboardInfoRect";
import axios from "axios";
import scanIcon from "./../../../../assets/images/scan.png";
import acceptIcon from "./../../../../assets/images/ok-grey.png";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectLogin: true,
            weeklyScans: 0,
            weeklyProductsToAccept: 0
        };
    }

    getScans = () => {
        return new Promise(resolve => {
            this.context.handleShowLoader(true);
            try {
                axios
                    .get(`${this.context.API_URL}get-weekly-scans`, {
                        headers: {
                            Authorization: `Bearer ${this.context.token}`
                        }
                    })
                    .then(response => {
                        const { data } = response;

                        if (response.status === 200) {
                            this.setState({ weeklyScans: data.result.scans });
                        }

                        resolve(response);
                    })
                    .catch(err => {
                        this.context.checkTokenExpiration(err.response.status);
                    });
            } catch (err) {
                //console.log(err);
            } finally {
                this.context.handleShowLoader(false);
            }
        });
    };

    getProductsToAccept = () => {
        return new Promise(resolve => {
            this.context.handleShowLoader(true);
            try {
                axios
                    .get(
                        `${this.context.API_URL}get-weekly-products-to-accept`,
                        {
                            headers: {
                                Authorization: `Bearer ${this.context.token}`
                            }
                        }
                    )
                    .then(response => {
                        const { data } = response;

                        if (response.status === 200) {
                            this.setState({
                                weeklyProductsToAccept: data.result.products
                            });
                        }

                        resolve(response);
                    })
                    .catch(err => {
                        this.context.checkTokenExpiration(err.response.status);
                    });
            } catch (err) {
                //console.log(err);
            } finally {
                this.context.handleShowLoader(false);
            }
        });
    };

    getStatsInfo = async () => {
        if (this.context.token) {
            await this.getScans();
            await this.getProductsToAccept();
        }
    };

    componentDidMount = () => {
        this.context.handlAactiveMenuSection("Dashboard");

        this.getStatsInfo();
    };

    render() {
        const { weeklyScans, weeklyProductsToAccept } = this.state;

        return (
            <DashboardContainer>
                <Header text="Statistics - Current Week" />

                <div className="dashboard__rect-container row">
                    <DashboardInfoRect
                        icon={scanIcon}
                        headerText="Scans"
                        number={weeklyScans}
                    />

                    <DashboardInfoRect
                        icon={acceptIcon}
                        headerText="Products waiting for accept"
                        number={weeklyProductsToAccept}
                    />
                </div>
            </DashboardContainer>
        );
    }
}

Dashboard.contextType = MainContext;
export default Dashboard;
