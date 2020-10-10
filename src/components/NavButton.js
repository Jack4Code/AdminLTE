import React, { Component } from 'react';
import '../css/NavButton.css';


export default class NavButton extends Component {

    constructor(props) {
        super(props);


        this.state = {};

        this.generateButton = this.generateButton.bind(this);
        this.activateNavBtn = this.activateNavBtn.bind(this);
    }


    activateNavBtn() {
        if (this.props.btnObj.isActive === false) {
            this.props.changeActiveNavBtn(this.props.btnObj);
        }
    }

    generateButton() {

        let jsxBtn = null;

        let iconColor = this.props.colorTheme === '#333' ? 'white' : this.props.btnObj.isActive === true ? this.props.colorTheme : 'white';

        if (this.props.isLeftNav === true) {
            jsxBtn = <div className={this.props.btnObj.isActive === true ? "nav-button active" : "nav-button"} onClick={this.activateNavBtn.bind(null)}>
                <div className={"nav-button-selecter"} style={this.props.btnObj.isActive === true ? { backgroundColor: iconColor, height: '100%', top: '0rem' } : { top: '1.375rem', height: '0%' }}></div>
                <div className={"nav-btn-icon"} style={{ color: iconColor }}>
                    <div className={this.props.btnObj.icon}></div>
                </div>
                <div className={"nav-btn-label"}>{this.props.btnObj.title}</div>
            </div>
        }
        else {
            jsxBtn = <div className={this.props.btnObj.isActive === true ? "nav-button active" : "nav-button"} onClick={this.activateNavBtn.bind(null)}>
                <div className={"nav-button-selecter"} style={this.props.btnObj.isActive === true ? { backgroundColor: iconColor, height: '100%', top: '0rem' } : { top: '1.375rem', height: '0%' }}></div>
                <div className={"nav-btn-icon"} style={{ color: iconColor }}>
                    <div className={this.props.btnObj.icon}></div>
                </div>
            </div>
        }

        return jsxBtn;
    }


    render() {

        return this.generateButton();
    }
}