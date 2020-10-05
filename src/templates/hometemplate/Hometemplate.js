import React from 'react'
import Header from '../../components/Header/Header';
import { Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
const HomeLayout = (props) => {
    return (
        <>
            <Header />
            { props.children}
            <Footer />
        </>
    )
}

const Hometemplate = (props) => {
    return (
        <Route exact={props.exact} path={props.path} render={({ propsComponent }) => (
            <HomeLayout>
                <props.component {...propsComponent}></props.component>
            </HomeLayout>
        )} />
    )
}
export default Hometemplate;