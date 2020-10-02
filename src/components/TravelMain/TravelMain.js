import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import travelimg from '../../images/img-travel-1.png';
import './TravelMain.scss';
export default class TravelMain extends Component {
    render() {
        return (
            <section className="travelMain">
                <div className="img-content">
                    <div className="layer-travel"></div>
                    <img src={travelimg} alt='travel' />
                </div>
                <div className="box">
                    <div className="travel-content">
                        <h3 className="title">
                            Traveling around
                        </h3>
                        <p className="text">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <NavLink
                        to="/travel"
                        className="btn-seeMore">
                        SEE MORE
                </NavLink>
                    </div>
                </div>
            </section>
        )
    }
}
