import React, { Component } from 'react';
import '../css/LeftNav.css';
import { _hexToRGBA } from '../globals/constants.js';
import profilePic from '..//pics/profile.jpg';
import NavButton from './NavButton.js';

export default class LeftNav extends Component {

    constructor(props) {
        super(props);

        window.leftNav = this;

        this.state = {
            navButtons: [{
                id: 1,
                title: 'Dashboard',
                isActive: true,
                icon: "fa fa-dashboard"
            },
            {
                id: 2,
                title: 'Loan Calculator',
                isActive: false,
                icon: "fa fa-calculator"

            },
            {
                id: 3,
                title: 'Charts',
                isActive: false,
                icon: "fa fa-pie-chart"
            },
            {
                id: 4,
                title: 'Calendar',
                isActive: false,
                icon: "fa fa-calendar"
            },
            {
                id: 5,
                title: 'Mailbox',
                isActive: false,
                icon: "fa fa-envelope"
            },
            {
                id: 6,
                title: 'Tables',
                isActive: false,
                icon: "fa fa-table"
            }
            ]
        }

        this.generateProfileSection = this.generateProfileSection.bind(this);
        this.changeActiveNavBtn = this.changeActiveNavBtn.bind(this);
        this.generateNavButtons = this.generateNavButtons.bind(this);
    }


    generateProfileSection() {

        let profileWrapperStyle = {};
        let photoStyle = {};

        if (this.props.isLeftNav === true) {
            profileWrapperStyle = {
                height: '4.5rem',
                backgroundColor: '#21292c'
            };
            photoStyle = {
                width: '3.5rem',
                height: '3.5rem',
                transitionDelay: '0.05s'
            };
        }
        else {
            profileWrapperStyle = {
                height: '3rem',
                backgroundColor: '#21292c'
            };
            photoStyle = {
                width: '2rem',
                height: '2rem'
            };
        }

        let profileNameColor = this.props.colorTheme === '#333' ? 'white' : this.props.colorTheme;

        let jsx = <div className={"profile-wrapper"} style={profileWrapperStyle}>
            <div className={"profile-photo-wrapper"} style={photoStyle}><img src={profilePic} /></div>
            {this.props.isLeftNav === true ? <div className={"profile-name"} style={{ color: profileNameColor, width: 'calc(100% - 5rem)' }}>Jack Giannini</div> : null}
        </div>

        return jsx;
    }

    changeActiveNavBtn(btnObj) {
        let navBtnCpy = this.state.navButtons;

        navBtnCpy.forEach(navBtn => {
            if (navBtn.id === btnObj.id) {
                navBtn.isActive = true;
            }
            else {
                navBtn.isActive = false;
            }
        });

        this.setState({
            navButton: navBtnCpy
        });

        this.props.changePage(btnObj.title);
    }


    generateNavButtons() {
        let jsx = [];

        try {
            this.state.navButtons.forEach(navButton => {
                jsx.push(<NavButton key={navButton.id} btnObj={navButton} colorTheme={this.props.colorTheme} isLeftNav={this.props.isLeftNav} changeActiveNavBtn={this.changeActiveNavBtn} />)
            });
        }
        catch (err) {
            console.log(err);
        }

        return jsx;
    }


    render() {

        let widthStyle = {};

        if (this.props.isLeftNav === true) {
            widthStyle = {
                width: '14.375rem'
            }
        } else {
            widthStyle = {
                width: '3.125rem'
            }
        }

        let btnContainerTopPosition = '';

        if (this.props.isLeftNav === true) {
            btnContainerTopPosition = '7.625rem'
        }
        else {
            btnContainerTopPosition = '6.125rem'
        }

        return (
            <div className={"left-nav-wrapper"} style={widthStyle}>
                <div className={"nav-title"} style={{ backgroundColor: _hexToRGBA(this.props.colorTheme, 0.75) }}>
                    <div className={"title-label"}>{this.props.isLeftNav === true ? "AdminCMC" : "CMC"}</div>
                    {this.generateProfileSection()}
                </div>
                <div className={"left-side-nav-btn-container"} style={{ top: btnContainerTopPosition, height: this.state.navButtons.length * 2.75 + 'rem' }}>
                    {this.generateNavButtons()}
                </div>
            </div>
        );
    }


}