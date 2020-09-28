import React, { Component } from 'react'
import { connect } from 'react-redux';
import './DanceDetailPage.scss';
class DanceDetailPage extends Component {
    renderDanceDetail = () => {
        let { idDance, listDance } = this.props;
        console.log(this.props.idDance, this.props.listDance)
        const position = listDance.findIndex(item => item.id === idDance)
        console.log(position)
        console.log(listDance[position].images)
        return listDance[position].images?.map((item, index) => {
            return (
                <div className="img" key={index} >
                    <img src={item.img} />
                </div>
            )

        })
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

