import React, { Component } from 'react'
import Aboutus from '../../components/Aboutus/Aboutus'
import Discover from '../../components/Discover/Discover'
import Information from '../../components/Information/Information'
import TopTitle from '../../components/TopTitle/TopTitle'

export default class Home extends Component {
    render() {
        return (
            <>
                <TopTitle />
                <Aboutus />
                <Discover />
                <Information />
            </>
        )
    }
}
