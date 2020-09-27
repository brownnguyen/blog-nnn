import React, { Component } from 'react';
import './DancingTeam.scss';
import data from '../../JSON/database.json';
export default class DancingTeam extends Component {
    renderDancingContent = () => {
        console.log(data)
        return data.data.mainTopic.dancingteam.map((item, index) => {
            return (
                <div
                    key={index}
                    className="content">
                    <img src={item.img} alt={item.subject} />
            <p className="text">{item.details}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <section className="dancing-team">
                {this.renderDancingContent()}
            </section>
        )
    }
}
