import React, { Component } from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { header } from '../../constants/Constants';
import { connect } from 'react-redux';
class Header extends Component {
    renderHeader = () => {
        return header.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink className="header__link"
                        to={link.to}
                        exact>{link.title}</NavLink>
                </li>
            )
        })
    }
    render() {
        return (
            <header className="header">
                <div className="box">
                    <div className="header-main">
                        <h1 className="title-page">
                            <NavLink to="/" exact >
                                LOGO
                            </NavLink>
                        </h1>
                        <div className="header-content">
                            <ul>
                                {this.renderHeader()}
                            </ul>
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