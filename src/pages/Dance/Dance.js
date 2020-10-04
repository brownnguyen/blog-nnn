import React, { Component } from 'react'
import ContentDanceAwards from '../../components/ContentDanceAwards/ContentDanceAwards'
import Discover from '../../components/Discover/Discover'
export default class Dance extends Component {
    render() {
        return (
            <div>
                <ContentDanceAwards />
                <Discover />
            </div>
        )
    }
}
