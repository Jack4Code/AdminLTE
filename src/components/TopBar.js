import React, { Component } from 'react';
import '../css/TopBar.css'
import { COLORS, _lightenOrDarkenColor } from '../globals/constants.js';


export default class TopBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            settingsHover: false,
            hamburgerHover: false
        };

        this.activateRightSideNav = this.activateRightSideNav.bind(this);
        this.toggleOptionHover = this.toggleOptionHover.bind(this);
        this.toggleLeftNav = this.toggleLeftNav.bind(this);
    }

    activateRightSideNav() {
        this.props.toggleRightSideNav();
    }

    toggleOptionHover(option) {
        switch (option) {
            case "settings":
                this.setState({ settingsHover: !this.state.settingsHover });
                break;
            case "leftNav":
                this.setState({ hamburgerHover: !this.state.hamburgerHover });
                break;
        }
    }

    toggleLeftNav() {
        this.props.toggleLeftNav();
    }

    render() {


        let topBarStyle = {};

        if (this.props.isLeftNav === true) {
            topBarStyle = {
                left: '14.375rem',
                width: 'calc(100% - 14.375rem)',
                backgroundColor: this.props.colorTheme
            }
        } else {
            topBarStyle = {
                left: '3.125rem',
                width: 'calc(100% - 3.125rem)',
                backgroundColor: this.props.colorTheme
            }
        }

        return (
            <div className="top-bar" style={topBarStyle}>

                <div className={"hamburger-menu"} onClick={this.toggleLeftNav} style={this.state.hamburgerHover === true ? { backgroundColor: _lightenOrDarkenColor(this.props.colorTheme, -20) } : { backgroundColor: this.props.colorTheme }} onMouseOver={this.toggleOptionHover.bind(null, "leftNav")} onMouseLeave={this.toggleOptionHover.bind(null, "leftNav")}>
                    <div className={"hamburger-icon fa fa-bars"}></div>
                </div>

                <div className="settings-icon-wrapper" style={this.state.settingsHover === true ? { backgroundColor: _lightenOrDarkenColor(this.props.colorTheme, -20) } : { backgroundColor: this.props.colorTheme }} onClick={this.activateRightSideNav} onMouseOver={this.toggleOptionHover.bind(null, "settings")} onMouseLeave={this.toggleOptionHover.bind(null, "settings")}>
                    <div className="gear-icon fa fa-gears"></div>
                </div>
            </div >
        );
    }
}