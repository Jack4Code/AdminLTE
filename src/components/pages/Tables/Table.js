import React, { Component } from 'react';
import '../../../css/TablePage.css';

export default class Table extends Component {

    constructor(props) {

        super(props);

        window.table = this;

        this.state = {

        };

        this.init = this.init.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRows = this.renderRows.bind(this);
    }


    init() {

    }

    renderHeader() {

        let headerCols = [];

        let colNumber = Object.keys(this.props.tableData).length;
        let cellWidthStyle = { width: `calc(100% / ${colNumber})`, fontWeight: 'bold' }

        Object.keys(this.props.tableData[0]).forEach(col => {
            headerCols.push(<div key={col} className={"table-cell"} style={cellWidthStyle}>{col}</div>)
        });



        return (<div className={"header-region"}>
            <div className={"table-row"}>{headerCols}</div>
        </div>)
    }

    renderRows() {

        let dataRows = [];

        let colNumber = Object.keys(this.props.tableData).length;
        let cellWidthStyle = { width: `calc(100% / ${colNumber})` }

        this.props.tableData.forEach(row => {
            Object.keys(this.props.tableData).forEach(col => {
                dataRows.push(<div key={col} className={"table-cell"} style={cellWidthStyle}>{this.props.tableData[col]}</div>)
            });
        });


        return (<div className={"table-body"}>
            {dataRows}
        </div>)
    }


    render() {

        this.init();


        return (<div className={"inner-table-container"}>

            {this.renderHeader()}
            {this.renderRows()}



        </div>);
    }
}