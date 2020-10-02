import React, { Component } from 'react'
import DanceDetail from '../../components/DanceDetail/DanceDetail'
import Discover from '../../components/Discover/Discover'
export default class Dance extends Component {
    render() {
        return (
            <div>
                <Discover />
                <DanceDetail/>
            </div>
        )
    }
}
