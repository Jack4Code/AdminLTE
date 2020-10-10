import React, { Component } from 'react';
import '../css/ContentArea.css';
import LoanCal from './pages/LoanCal.js';


export default class ContentArea extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.generatePage = this.generatePage.bind(this);
    }


    generatePage() {
        let page = <div>Test</div>;

        switch (this.props.page) {
            case "Dashboard":
                page = <div>{"dashboard"}</div>;
                break;
            case "LoanCal":
                page = <LoanCal colorTheme={this.props.colorTheme} />
                break;
        }


        return page;
    }



    render() {

        let contentWrapperStyle = {};

        if (this.props.isLeftNav === true) {
            contentWrapperStyle = {
                top: '3.125rem',
                left: '14.375rem',
                width: 'calc(100% - 14.375rem)'
            };
        }
        else {
            contentWrapperStyle = {
                top: '3.125rem',
                left: '3.125rem',
                width: 'calc(100% - 3.125rem)'
            };
        }


        return (
            <div className="content-wrapper" style={contentWrapperStyle}>

                {this.generatePage()}

            </div>
        );
    }
}