import React, { Component } from 'react'
import "./TopTitle.scss";
import imagebg from '../../images/img-bg-top.png';
export default class TopTitle extends Component {
    render() {
        return (
            <section className="topTitle">
                <div className="top-title-content">
                    <div className="content">
                        <img src={imagebg} alt="hình nền" />
                    </div>
                    <div className="content">
                        <div className="main-content">
                            <h2 className="title">
                                Lorem ipsum dolor sit amet tetur tetur adipis icing elit
                            </h2>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
