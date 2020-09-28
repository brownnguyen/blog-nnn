import React, { Component } from 'react'
import Home from '../../pages/Home/Home'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Hometemplate from '../../templates/hometemplate/Hometemplate';
import Dance from '../../pages/Dance/Dance';
import Travel from '../../pages/Travel/Travel';
import Blog from '../../pages/Blog/Blog';
import About from '../../pages/About/About';
import firebase from 'firebase';
import { db_Config } from '../../firebaseConfig';
import { connect } from 'react-redux';
import { CreateAction } from '../../redux/actions/CreateAction';
import { FETCH__DANCE__REQUEST, FETCH__MAINTOPIC__REQUEST } from '../../redux/types/Types';
import DanceDetailPage from '../../pages/DanceDetailPage/DanceDetailPage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 10
    }
    this.app = firebase.initializeApp(db_Config);
    this.database = this.app.database().ref();
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Hometemplate path='/' exact component={Home} />
          <Hometemplate path='/travel' exact component={Travel} />
          <Hometemplate path='/dance' exact component={Dance} />
          <Hometemplate path="/detaildance/:iddance" exact component={DanceDetailPage} />
          <Hometemplate path='/blog' exact component={Blog} />
          <Hometemplate path='/about' exact component={About} />
        </BrowserRouter>
      </>
    )
  }
  componentDidMount() {
    this.database.on('value', snap => {
      this.props.dispatch(CreateAction(FETCH__DANCE__REQUEST, snap.val().danceTopic));
      this.props.dispatch(CreateAction(FETCH__MAINTOPIC__REQUEST, snap.val().mainTopic))
    })
  }
}

export default connect(null, null)(App);
