import React from 'react';
import  Hotel from './Components/Hotel'
import BookRoom from './Components/BookRoom';
import AddHotel from './Components/AddHotel';
import 'antd/dist/antd.css';
import './Components/style.css'
import {Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route exact component={Hotel} path="/" />
      <Route exact component={BookRoom} path="/bookroom" />
      <Route exact component={AddHotel} path="/addhotel" />
      {/* <Route exact component={UpdateHotel} path="/updatehotel" /> */}
    </Switch>
  )
}

export default App;
