import React, { Component } from 'react';
import Table from './Tables/Table.js';
import '../../css/TablePage.css';



export default class LoanCal extends Component {

    constructor(props) {

        super(props);

        this.state = {
            tables: [[{ "id": 1, "first_name": "Theda", "last_name": "Domnin", "email": "tdomnin0@wordpress.com", "gender": "Female", "SSN": "514-62-1694", "amount": "$7.28", "account_number": "3539277699496145" }, { "id": 2, "first_name": "Koral", "last_name": "Eddoes", "email": "keddoes1@vinaora.com", "gender": "Female", "SSN": "399-13-9575", "amount": "$1.89", "account_number": "3534815731767281" }, { "id": 3, "first_name": "Devora", "last_name": "Pelos", "email": "dpelos2@blogger.com", "gender": "Female", "SSN": "429-36-4331", "amount": "$9.02", "account_number": "5048372673535775" }, { "id": 4, "first_name": "Shaw", "last_name": "Bovis", "email": "sbovis3@nationalgeographic.com", "gender": "Male", "SSN": "637-83-1197", "amount": "$0.35", "account_number": "201890382347327" }, { "id": 5, "first_name": "Jillie", "last_name": "Reaney", "email": "jreaney4@dropbox.com", "gender": "Female", "SSN": "490-55-5242", "amount": "$6.27", "account_number": "6761400243308664021" }, { "id": 6, "first_name": "Simonette", "last_name": "Pirnie", "email": "spirnie5@mlb.com", "gender": "Female", "SSN": "141-45-1588", "amount": "$7.53", "account_number": "3555953244176064" }, { "id": 7, "first_name": "Rorke", "last_name": "Dibdin", "email": "rdibdin6@soundcloud.com", "gender": "Male", "SSN": "632-56-3876", "amount": "$3.72", "account_number": "3544767363137598" }, { "id": 8, "first_name": "Korrie", "last_name": "Bloxsom", "email": "kbloxsom7@newyorker.com", "gender": "Female", "SSN": "527-59-8217", "amount": "$0.52", "account_number": "3535169518270484" }, { "id": 9, "first_name": "Carlene", "last_name": "Loud", "email": "cloud8@cnn.com", "gender": "Female", "SSN": "286-10-5428", "amount": "$3.93", "account_number": "201919834633479" }, { "id": 10, "first_name": "Christan", "last_name": "Dawbury", "email": "cdawbury9@epa.gov", "gender": "Female", "SSN": "445-93-0491", "amount": "$6.17", "account_number": "5211483678665904" }, { "id": 11, "first_name": "Nola", "last_name": "Rider", "email": "nridera@cbslocal.com", "gender": "Female", "SSN": "638-32-5752", "amount": "$9.70", "account_number": "5602220123573185" }, { "id": 12, "first_name": "Shurwood", "last_name": "Gove", "email": "sgoveb@baidu.com", "gender": "Male", "SSN": "258-86-8322", "amount": "$9.14", "account_number": "4917863526889444" }, { "id": 13, "first_name": "Dar", "last_name": "Nacci", "email": "dnaccic@senate.gov", "gender": "Male", "SSN": "310-47-1247", "amount": "$4.01", "account_number": "337941217797983" }, { "id": 14, "first_name": "Montague", "last_name": "Ferneyhough", "email": "mferneyhoughd@dagondesign.com", "gender": "Male", "SSN": "838-22-9419", "amount": "$9.85", "account_number": "3581025410046609" }, { "id": 15, "first_name": "Sile", "last_name": "Mullinder", "email": "smullindere@epa.gov", "gender": "Female", "SSN": "688-23-6510", "amount": "$4.79", "account_number": "30436779438886" }, { "id": 16, "first_name": "Jacintha", "last_name": "Schukert", "email": "jschukertf@jiathis.com", "gender": "Female", "SSN": "670-05-5399", "amount": "$4.02", "account_number": "36639318815894" }, { "id": 17, "first_name": "Lolly", "last_name": "O'Corrane", "email": "locorraneg@rakuten.co.jp", "gender": "Female", "SSN": "705-58-6931", "amount": "$3.91", "account_number": "675930057392031898" }]]
        };

        this.generateTables = this.generateTables.bind(this);

    }

    generateTables() {

        let tablesJsx = [];

        if (this.state.tables.length === 0) {
            return null;
        }

        let tableNumber = 0;
        this.state.tables.forEach(table => {
            tablesJsx.push(<div key={tableNumber} className={"outer-table-container"}>
                <Table tableData={table} />
            </div>);
            tableNumber++;
        });

        return tablesJsx;
    }

    render() {

        return (
            <div className={"table-page"}>
                {this.generateTables()}
            </div>
        );

    }
}