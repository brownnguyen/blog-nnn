import React, { Component } from 'react';
import './DetailVug.scss';
import data from '../../JSON/dancingdata.json';
export default class DetailVug extends Component {
    renderdetailVug = () => {
        return data.vug.map((item, index) => {
            return (<div
                key={index}
                className="content">
                <img src={item.img} alt="vug" />
            </div>)
        })
    }
    render() {
        return (
            <section className="detailVug">
                <div className="box">
                    <div className="vug-content">
                        {this.renderdetailVug()}
                    </div>
                </div>
            </section>
        )
    }
}
