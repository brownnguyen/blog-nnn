import React, { Component } from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { header } from '../../constants/Constants';
import { connect } from 'react-redux';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false
        }
    }
    renderHeader = () => {
        return header.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink className="header__link" onClick={this.changeShowDrawer}
                        to={link.to}
                        exact>{link.title}</NavLink>
                </li>
            )
        })
    }
    changeShowDrawer = () => {
        this.setState({
            showDrawer: false
        })
    }
    renderShowDrawer = () => {
        this.setState({
            showDrawer: !this.state.showDrawer
        })
    }
    render() {
        return (
            <header className="header">
                <div className="box">
                    <div className="header-main">
                        <h1 className="title-page">
                            <NavLink to="/" exact>
                                NNN
                            </NavLink>
                        </h1>
                        <div className={this.state.showDrawer ? "drawer-header active" : "drawer-header"} >
                            <div className="layer-drawer"
                            onClick={this.changeShowDrawer}
                            ></div>
                            <div className="header-content">
                                <div className="menu-button-header" onClick={this.renderShowDrawer}>
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
}
const mapStateToProps = (state) => ({
    link: state.MainTopicReducer.mainTopic.header
})
export default connect(mapStateToProps)(Header);