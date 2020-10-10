import React, { Component } from 'react';
import { COLORS } from '../globals/constants.js';


export default class ColorThemePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            colorMapping: {
                Red: COLORS.redTheme,
                Blue: COLORS.blueTheme,
                Yellow: COLORS.yellowTheme,
                Green: COLORS.greenTheme,
                Purple: COLORS.purpleTheme,
                Grey: COLORS.greyTheme
            }
        };

        this.changeColorTheme = this.changeColorTheme.bind(this);
    }

    changeColorTheme(color) {
        this.props.changeColorTheme(null, color);
    }

    render() {
        return (
            <div className="color-theme" style={{ backgroundColor: this.state.colorMapping[this.props.label] }} onClick={this.changeColorTheme.bind(null, this.state.colorMapping[this.props.label])}>
                <div className="color-theme-label">{this.props.label}</div>
            </div>
        );
    }

}