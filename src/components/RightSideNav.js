import React, { Component } from 'react';
import '../css/RightSideNav.css';
import { COLORS } from '../globals/constants.js';
import ColorThemePicker from './ColorThemePicker';


export default class RightSideNav extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        this.changeColorTheme = this.changeColorTheme.bind(this);
    }


    changeColorTheme(color) {
        this.props.changeColorTheme(color);
    }


    render() {

        let activeStyling = {};
        if (this.props.isActive === true) {
            activeStyling = { right: '0rem' };
        }
        else {
            activeStyling = { right: '-14.375rem' };
        }


        return (
            <div className="right-side-nav" style={activeStyling}>

                <div className="skins-wrapper">
                    <div className="title">Color Themes:</div>
                    <ColorThemePicker label={"Red"} changeColorTheme={this.changeColorTheme.bind(null, COLORS.redTheme)} />
                    <ColorThemePicker label={"Blue"} changeColorTheme={this.changeColorTheme.bind(null, COLORS.blueTheme)} />
                    <ColorThemePicker label={"Yellow"} changeColorTheme={this.changeColorTheme.bind(null, COLORS.yellowTheme)} />
                    <ColorThemePicker label={"Green"} changeColorTheme={this.changeColorTheme.bind(null, COLORS.greenTheme)} />
                    <ColorThemePicker label={"Purple"} changeColorTheme={this.changeColorTheme.bind(null, COLORS.purpleTheme)} />
                    <ColorThemePicker label={"Grey"} changeColorTheme={this.changeColorTheme.bind(null, COLORS.greyTheme)} />
                </div>


            </div>
        );
    }
}