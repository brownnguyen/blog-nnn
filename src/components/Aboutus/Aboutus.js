import React, { Component } from 'react'
import aboutimg from '../../images/img-phanthiet.png';
import { NavLink } from 'react-router-dom';
import './Aboutus.scss';
export default class Aboutus extends Component {
    render() {
        return (
            <section className="aboutus">
                <div className="box">
                    <div className="about-content">
                        <div className="content">
                            <img src={aboutimg} alt="about" />
                        </div>
                        <div className="content">
                            <div className="main-content">
                                <h3 className="title">
                                    ABOUT ME
                                </h3>
                                <div className="detail">
                                    <div className="details-block">
                                        <i className="fab fa-studiovinari about-icon"></i>
                                        <h5 className="title">FRONT END DEVELOPER</h5>
                                        <p className="text">
                                            We have the most qualified firefighters in the city. Crew with over 2000 hours.
                                        </p>
                                        <NavLink to="/" exact className="link-aboutus">
                                            Portfolio
                                        </NavLink>
                                    </div>
                                    <div className="details-block">
                                        <i className="fab fa-battle-net about-icon"></i>
                                        <h5 className="title">DANCER</h5>
                                        <p className="text">
                                            Alert situations? We have a special emergency line to communicate with our department.
                                        </p>
                                        <NavLink to="/dance" exact className="link-aboutus">
                                            Xem thêm
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
