import React, { Component } from 'react'
import '../../../node_modules/slick-carousel/slick/slick.css';
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from 'react-redux';
import './ContentDanceAwards.scss';

class ContentDanceAwards extends Component {
    renderInfoDance = () => {
        let { danceInfo } = this.props;
        console.log(this.props.danceAwards);
        return danceInfo.content?.map((item, index) => {
            return <div className="slide-contentAwards" key={index}>
                <img src={item.img} alt={item.title} />
            </div>
        })
    }
    renderDanceAwards = () => {
        let { danceAwards } = this.props;
        return danceAwards?.map((item, index) => {
            return (
                <div className="awardsContent" key={index}>
                    <div className="content awardsImg">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className="content awardsText">
                        <h4 className="title">
                            {item.title}
                        </h4>
                    </div>
                </div>
            )
        })
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            fade: true,
            pauseOnHover: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <section className="ContentDanceAwards">
                <div className="contentSlide">
                    <h2 className="title">
                        Bboy <br />
                    Since 2009
                    </h2>
                    <Slider {...settings}>
                        {this.renderInfoDance()}
                    </Slider>
                </div>
                <div className="box">
                    <div className="mainContentAwards">
                        {this.renderDanceAwards()}
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    danceInfo: state.DanceReducer.danceInfo,
    danceAwards: state.DanceReducer.danceAwards
})
export default connect(mapStateToProps, null)(ContentDanceAwards)