import React, { Component } from 'react'
import './Footer.scss';
import { NavLink } from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="box">
                    <div className="footer-content">
                        <NavLink to="/">
                            <h3 className="title footer-title">
                                NNN
                            </h3>
                        </NavLink>
                        <p className="center-text">
                            This page using Reactjs framework
                        </p>
                        <div className="footer-link">
                            <a className="link" href="https://www.facebook.com/nguyenduchung2608">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a className="link" href="https://github.com/brownnguyen">
                                <i className="fab fa-github"></i>
                            </a>
                            <a className="link" href="https://www.instagram.com/nau.stagram/">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
