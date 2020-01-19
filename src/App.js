import React, { useContext } from 'react';
import firebase from './firebase';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Home from './components/Home';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { About } from './components/About';
import Rooms from './components/Rooms';
import ExactRoom from './components/ExactRoom';
import { Booked } from './components/Booked/Booked';
import getRooms from './functions/getRooms';
import { AuthContext } from './Auth';
function App() {
  const { currentUser } = useContext(AuthContext);
  const flats = getRooms();

  const handleSignOut = e => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  const WrappedRooms = function(props) {
    return <Rooms {...props} flats={flats} />;
  };
  const WrappedExatRoom = function(props) {
    return <ExactRoom {...props} flats={flats} />;
  };
  const WrappedBooked = function(props) {
    return <Booked {...props} flats={flats} id={currentUser.uid} />;
  };
  return (
    <>
      <Header currentUser={currentUser} handleSignOut={handleSignOut} />
      <Switch>
        <PrivateRoute path={`/rooms/:id`} component={WrappedExatRoom} />
        <PrivateRoute path={`/booked`} component={WrappedBooked} />
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Route path="/gallery" exact>
          <Gallery flats={flats} />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route exact path="/rooms" component={WrappedRooms}></Route>
      </Switch>
    </>
  );
}

export default App;
