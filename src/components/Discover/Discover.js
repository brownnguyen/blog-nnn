import React, { Component } from 'react'
import './Discover.scss';
import bgCrew from '../../images/img-bg-crew.png';
export default class Discover extends Component {
    render() {
        return (
            <section className="discover">
                <div className="discover-content">
                    <div className="content">
                        <div className="detail">
                            <h3 className="title-h3">
                                <span>Discover</span>
                                NNN
                            </h3>
                            <p className="text">
                                A small river named Duden flows by their place and supplies it with the necessary regelialia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <span className="name-discover">NNN</span>
                        </div>
                    </div>
                    <div className="content">
                        <img src={bgCrew} alt="Thu Duc United" />
                    </div>
                </div>
            </section>
        )
    }
}
