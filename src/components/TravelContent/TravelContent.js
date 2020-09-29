import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import './TravelContent.scss';
class TravelContent extends Component {
    renderTravelContent = () => {
        let { travelTopics } = this.props;
        return travelTopics.map((item, index) => {
            return (
                <NavLink to="/" exact className="content" key={index}>
                    <span className="title-text">{item.title}</span>
                    <div className="img">
                        <img src={item.images} alt={item.title} />
                    </div>
                </NavLink>
            )

        })
    }
    render() {
        return (
            <section className="travelTopic">
                <div className="box">
                    <div className="travel-content">
                        {this.renderTravelContent()}
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    travelTopics: state.TravelReducer.travelTopics
})
export default connect(mapStateToProps)(TravelContent)