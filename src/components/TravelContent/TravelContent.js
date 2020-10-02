import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import './TravelContent.scss';
class TravelContent extends Component {
    arr = [
        {"id":437, name:"John"},
        {"id":438, name:"Smith"}
    ];
    renderTravelContent = () => {
        let { travelTopics } = this.props;
        return travelTopics.map((item, index) => {
            return (
                <NavLink to={`/detailtravel/${item.id}`} exact className="content" key={index}>
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
                {console.log(this.arr.includes({"id":437, name:"John"}))}
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