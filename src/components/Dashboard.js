import React, { Component } from 'react';
import TopBar from './TopBar.js';
import LeftNav from './LeftNav.js';
import RightSideNav from './RightSideNav.js';
import ContentArea from './ContentArea.js';
import { COLORS } from '../globals/constants.js';

export default class Dashboard extends Component {
    constructor() {
        super();

        window.dashboard = this;

        this.state = {
            colorTheme: COLORS.blueTheme,
            rightSideNavActive: false,
            leftNav: true,
            page: "Dashboard"
        };

        this.changeColorTheme = this.changeColorTheme.bind(this);
        this.toggleRightSideNav = this.toggleRightSideNav.bind(this);
        this.toggleLeftNav = this.toggleLeftNav.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {

        if (window.localStorage.getItem("COLOR_THEME") === undefined || window.localStorage.getItem("COLOR_THEME") === null) {
            window.localStorage.setItem("COLOR_THEME", COLORS.blueTheme)
        }

        this.setState({
            colorTheme: window.localStorage.getItem("COLOR_THEME")
        });
    }

    changeColorTheme(color) {
        window.localStorage.setItem("COLOR_THEME", color);
        this.setState({
            colorTheme: color
        })
    }

    toggleRightSideNav() {
        this.setState({
            rightSideNavActive: !this.state.rightSideNavActive
        })
    }

    toggleLeftNav() {
        this.setState({
            leftNav: !this.state.leftNav
        });
    }

    changePage(pageTitle) {

        switch (pageTitle) {
            case "Loan Calculator":
                pageTitle = "LoanCal";
                break;
            default:
                pageTitle = pageTitle;
                break;
        }

        this.setState({
            page: pageTitle
        });
    }

    render() {
        return (
            <div>
                <LeftNav colorTheme={this.state.colorTheme} isLeftNav={this.state.leftNav} changePage={this.changePage} />
                <TopBar colorTheme={this.state.colorTheme} isLeftNav={this.state.leftNav} toggleRightSideNav={this.toggleRightSideNav} toggleLeftNav={this.toggleLeftNav} />
                <RightSideNav changeColorTheme={this.changeColorTheme} isActive={this.state.rightSideNavActive} />
                <ContentArea isLeftNav={this.state.leftNav} page={this.state.page} colorTheme={this.state.colorTheme} />
            </div>
        )
    }
}