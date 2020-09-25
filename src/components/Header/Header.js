import React, { Component } from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';
import data from '../../JSON/database.json';
export default class Header extends Component {
    renderHeader = () => {
        return data.header?.map((link, index) => {
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
