import React, { Component } from 'react'
import { connect } from 'react-redux';
import './DanceDetailPage.scss';
class DanceDetailPage extends Component {
    renderDanceDetail = () => {
        let { idDance, listDance } = this.props;
        const position = listDance.findIndex(item => item.id === idDance.id)
        let xhtml = null;
        if (position !== -1) {
            xhtml = listDance[position].images?.map((item, index) => {
                return (
                    <div className="img" key={index} >
                        <img src={item.img} alt="bboy" />
                    </div>
                )
            })
        }
        return xhtml;
    }
    render() {
        return (
            <section className="danceDetailPage">
                <div className="box">
                    <div className="danceDetailContent">
                        {this.renderDanceDetail()}
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    idDance: state.DanceReducer.idDance,
    listDance: state.DanceReducer.listDanceContent
})
export default connect(mapStateToProps, null)(DanceDetailPage);

