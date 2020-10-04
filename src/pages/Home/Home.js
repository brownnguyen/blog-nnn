import React, { Component } from 'react'
import Aboutus from '../../components/Aboutus/Aboutus'
import DancingTeam from '../../components/DancingTeam/DancingTeam'
import Information from '../../components/Information/Information'
import TopTitle from '../../components/TopTitle/TopTitle'
import DanceDetail from '../../components/DanceDetail/DanceDetail'
import TravelMain from '../../components/TravelMain/TravelMain'
import HomeBlog from '../../components/HomeBlog/HomeBlog'
export default class Home extends Component {
    render() {
        return (
            <>
                <TopTitle />
                <Aboutus />
                <TravelMain />
                <DanceDetail />
                <DancingTeam />
                <HomeBlog />
                <Information />
            </>
        )
    }
}
