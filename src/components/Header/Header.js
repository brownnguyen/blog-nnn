import React, { Component } from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { header } from '../../constants/Constants';
import { connect } from 'react-redux';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false,
            onHeight: false,
        }
    }
    renderHeader = () => {
        return header.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink className="header__link" onClick={this.renderHideDrawer}
                        to={link.to}
                        exact>{link.title}</NavLink>
                </li>
            )
        })
    }
    renderShowDrawerClick = () => {
        this.setState({
            showDrawer: !this.state.showDrawer
        })
    }
    renderShowDrawer = () => {
        this.setState({
            showDrawer: true
        })
    }
    renderHideDrawer = () => {
        this.setState({
            showDrawer: false
        })
    }
    render() {
        const drawerClass = this.state.showDrawer ? "drawer-header active" : "drawer-header"
        return (
            <header className={this.state.onHeight ? "header active" : "header unactive"}>
                <div className="box">
                    <div className="header-main">
                        <h1 className="title-page">
                            <NavLink to="/" exact>
                                NNN
                            </NavLink>
                        </h1>
                        <div className={drawerClass}
                            onMouseEnter={this.renderShowDrawer}
                        >
                            <div className="layer-drawer"
                                onClick={this.renderShowDrawerClick}
                            ></div>
                            <div className="header-content">
                                <div className="menu-button-header" onClick={this.renderShowDrawerClick}>
                                    <div className="div-menu-span">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <ul>
                                    {this.renderHeader()}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        )
    }
    componentDidMount() {
        window.onscroll = () => {
            let height = window.scrollY;
            if (height > 400) {
                this.setState({
                    onHeight: true
                })
            }
            else {
                this.setState({
                    onHeight: false
                })
            }
        }
    }
}
const mapStateToProps = (state) => ({
    link: state.MainTopicReducer.mainTopic.header
})
export default connect(mapStateToProps)(Header);