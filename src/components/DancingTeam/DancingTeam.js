import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CreateAction } from '../../redux/actions/CreateAction';
import { PUSH__ID__DANCE } from '../../redux/types/Types';
import './DancingTeam.scss';
class DancingTeam extends Component {
    renderDispatch = (id) => {
        this.props.dispatch(CreateAction(PUSH__ID__DANCE, { id: id }))
    }
    renderDancingContent = () => {
        let xhtml = null;
        if (this.props.dancingteam) {
            xhtml = this.props.dancingteam?.map((item, index) => {
                return (
                    <NavLink onClick={() => this.renderDispatch(item.id)}
                        to={`/detaildance/${item.id}`}
                        key={index}
                        className="content">
                        <img src={item.img} alt={item.subject} />
                        <p className="text">{item.details}</p>
                    </NavLink>
                )
            })
        }
        return xhtml;
    }
    render() {
        return (
            <section className="dancing-team">
                {this.renderDancingContent()}
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    dancingteam: state.MainTopicReducer.mainTopic.dancingteam
})
export default connect(mapStateToProps)(DancingTeam);
