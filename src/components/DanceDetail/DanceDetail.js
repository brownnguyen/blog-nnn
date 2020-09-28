import React, { Component } from 'react';
import './DanceDetail.scss';
import { connect } from 'react-redux';
class DanceDetail extends Component {
    renderTitle = () => {
        let title = null;
        if (this.props.vug) {
            title = <h3 className="title">{this.props.vug.title}</h3>
        }
        return title;
    }
    renderdetailVug = () => {
        let xhtml = null;
        if (this.props.vug) {
            xhtml = (
                this.props.vug.images.map((item, index) => {
                    return (<div
                        key={index}
                        className="content">
                        <img src={item.img} alt={item.id} />
                    </div>)
                })
            )
        }
        return xhtml;
    }
    render() {
        return (
            <section className="detailVug">
                {/* {console.log(this.props.match.param)} */}
                <div className="box">
                    <div className="vug-content">
                        {this.renderTitle()}
                        {this.renderdetailVug()}
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    vug: state.DanceReducer.listDanceContent.danceContent
})
export default connect(mapStateToProps, null)(DanceDetail);