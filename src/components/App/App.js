import React, { Component } from 'react'
import Home from '../../pages/Home/Home'
import { BrowserRouter, Switch } from 'react-router-dom';
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
import { FETCH__DATA__REQUEST } from '../../redux/type/Types';
import ScrollToTop from 'react-router-scroll-top';
import DanceDetailPage from '../../pages/DanceDetailPage/DanceDetailPage';
import TravelDetailPage from '../../pages/TravelDetailPage/TravelDetailPage';
import { localStore } from '../../Services/LocalServices';
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
          <ScrollToTop>
            <Switch>
              <Hometemplate path='/' exact component={Home} />
              <Hometemplate path='/travel' exact component={Travel} />
              <Hometemplate path='/dance' exact component={Dance} />
              <Hometemplate path="/detaildance/:iddance" exact component={DanceDetailPage} />
              <Hometemplate path="/detailtravel/:idtravel" exact component={TravelDetailPage} />
              <Hometemplate path='/blog' exact component={Blog} />
              <Hometemplate path='/about' exact component={About} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </>
    )
  }
  componentDidMount() {
    localStore.getIdDance(this.props.dispatch);
    this.database.on('value', snap => {
      console.log(snap.val())
      this.props.dispatch(CreateAction(FETCH__DATA__REQUEST, snap.val()));
    })
  }
}

export default connect()(App);
