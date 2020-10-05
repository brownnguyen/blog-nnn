import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { inforContent } from '../../constants/Constants';
import './Information.scss';
export default class Information extends Component {
    renderDiv = () => {
        return inforContent.map((item, index) => {
            return (
                <NavLink
                    key={index}
                    to={`${item.title}`}
                    className={`content color-${index + 1}`}>
                    <h4 className="info-title">
                        {item.title}
                    </h4>
                    <img src={item.img} alt={item.title} />
                </NavLink>
            )
        })
    }
    render() {
        return (
            <section className="information">
                <div className="box">
                    <h3 className="title">
                        Lorem usj commeet hotoma inuluoge kimmi
                    </h3>
                    <div className="information-content">
                        <div className="content-first">
                            <h4 className="info-title">
                                Alert situations? We have a special emergency line to communicate with our department.
                            </h4>
                        </div>
                        {this.renderDiv()}
                        <div className="color-6">
                            <h4 className="name">
                                Have a good day!
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
