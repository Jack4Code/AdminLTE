import React, { Component } from 'react';
import '../../css/LoanCal.css';



export default class LoanCal extends Component {

    constructor(props) {
        super(props);

        window.loanPage = this;

        this.state = {

            propertyValue: 300000,
            downPayment: 20000,
            loanAmount: 280000,
            interestRate: 3.0,
        };

        this.handleKeyChange = this.handleKeyChange.bind(this);
    }


    handleKeyChange(e) {

        let reg = /^\d+$/;

        let id = e.target.id.toString();

        var loanAmount = 0;

        let key = '';
        switch (id) {
            case "property-value-input":
                key = 'propertyValue';
                break;
            case "downpayment-value-input":
                key = 'downPayment';
                break;
        }

        if (reg.test(e.target.value.replace(/,/g, '')) || e.target.value === '') {

            let num = Number(e.target.value.replace(/,/g, '')).toLocaleString('en');

            if (num !== NaN) {
                this.setState({
                    [key]: num
                }, () => {
                    document.getElementById(id).value = num;
                    loanAmount = parseFloat((this.state.propertyValue).toString().replace(/,/g, '')) - parseFloat((this.state.downPayment).toString().replace(/,/g, ''));
                    console.log('setState num !== NaN' + loanAmount);
                });
            } else {
                this.setState({
                    [key]: 0
                }, () => {
                    document.getElementById(id).value = 0;
                    loanAmount = parseFloat((this.state.propertyValue).toString().replace(/,/g, '')) - parseFloat((this.state.downPayment).toString().replace(/,/g, ''));
                    console.log('else setState num !== NaN' + loanAmount);
                });
            }
        }
        else {
            switch (id) {
                case "property-value-input":
                    document.getElementById(id).value = this.state.propertyValue;
                    loanAmount = parseFloat((this.state.propertyValue).toString().replace(/,/g, '')) - parseFloat((this.state.downPayment).toString().replace(/,/g, ''));
                    console.log('property-value-input' + loanAmount);
                    break;
                case "downpayment-value-input":
                    document.getElementById(id).value = this.state.downPayment;
                    loanAmount = parseFloat((this.state.propertyValue).toString().replace(/,/g, '')) - parseFloat((this.state.downPayment).toString().replace(/,/g, ''));
                    console.log('downpayment-value-input' + loanAmount);
                    break;
            }
        }


        console.log('right before setState at end of function ' + loanAmount);

        this.setState({
            loanAmount: loanAmount
        });
    }

    render() {

        let loanAmount = (parseFloat((this.state.propertyValue).toString().replace(/,/g, '')) - parseFloat((this.state.downPayment).toString().replace(/,/g, ''))).toLocaleString('en');

        return (
            <div className={"input-wrapper"}>
                <div className={"input-wrapper-top-color-bar"} style={{ backgroundColor: this.props.colorTheme }}></div>
                <div className={"property-value-header"} style={{ color: this.props.colorTheme }}>{"Property Value"}</div>
                <div className={"property-value-input-wrapper"}>
                    <div className={"dollar-symbol"} style={{ color: this.props.colorTheme }}>{"$"}</div>
                    <input id={"property-value-input"} onChange={this.handleKeyChange} type="text" style={{ borderBottom: '1px solid' + this.props.colorTheme }} placeholder={(this.state.propertyValue).toLocaleString('en')} />
                </div>

                <div className={"downpayment-value-header"} style={{ color: this.props.colorTheme }}>{"Down Payment"}</div>
                <div className={"downpayment-input-wrapper"}>
                    <div className={"dollar-symbol"} style={{ color: this.props.colorTheme }}>{"$"}</div>
                    <input id={"downpayment-value-input"} onChange={this.handleKeyChange} type="text" style={{ borderBottom: '1px solid' + this.props.colorTheme }} placeholder={(this.state.downPayment).toLocaleString('en')} />
                </div>

                <div className={"loan-info-wrapper"}>
                    <div className={"loan-amount-header"} style={{ color: this.props.colorTheme }}>
                        {"Loan Amount"}
                    </div>
                    <div className={"loan-amount-value"} style={{ color: this.props.colorTheme }}>
                        {"$ " + loanAmount}
                    </div>
                </div>
            </div>
        );
    }
}