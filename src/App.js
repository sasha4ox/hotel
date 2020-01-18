import React, { useContext } from 'react';
import firebase from './firebase';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Home from './components/Home';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import PrivateRoute from './PrivateRoute';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { About } from './components/About';
import Rooms from './components/Rooms';
import ExactRoom from './components/ExactRoom';
import { Booked } from './components/Booked/Booked';
import getRooms from './functions/getRooms';
import { AuthContext } from './Auth';
let arrayOfHottel = [
  {
    rooms: 1,
    sauna: true,
    img: `https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/07.jpg?alt=media&token=e7b33f00-3221-404c-8b32-3ddbbbfa014f`,
    luxury: true,
  },
  {
    rooms: 2,
    sauna: true,
    img: `https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/07.jpg?alt=media&token=e7b33f00-3221-404c-8b32-3ddbbbfa014f`,
    luxury: false,
  },
  {
    rooms: 1,
    sauna: true,
    img: `https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/129312653.jpg?alt=media&token=90132ca2-f16e-4b36-a1b2-95559e0e9b6d`,
    luxury: false,
  },
  {
    rooms: 3,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/1322569903_burj-al-arab-5-dubai-hotel-oae-parus-room.jpg?alt=media&token=3db423a7-9d4b-4887-bddb-2f2603310aad',
    luxury: true,
  },
  {
    rooms: 2,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/1441400029_dubai-1.jpg?alt=media&token=b6d5c242-3f81-4e8e-8429-df4ba90c7c5f',
    luxury: true,
  },
  {
    rooms: 1,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/167839581.jpg?alt=media&token=4b3927cc-d336-4e51-9407-8d44aad24da0',
    luxury: false,
  },
  {
    rooms: 1,
    sauna: false,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/204623113.jpg?alt=media&token=851c7145-5980-4c7e-97b9-d2c500e07e72',
    luxury: false,
  },
  {
    rooms: 1,
    sauna: false,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/219620636.jpg?alt=media&token=987da1dd-4f68-4720-9d4d-c4c8d34cce00',
    luxury: false,
  },
  {
    rooms: 1,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/260190885.jpg?alt=media&token=9a99d1d4-9426-4fc8-a8f5-35b536e56503',
    luxury: true,
  },
  {
    rooms: 1,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/Atlantis-Palm-Refurbished-Deluxe-Room.jpg?alt=media&token=8915c115-a0a1-48bb-b70f-4d36064103aa',
    luxury: false,
  },
  {
    rooms: 1,
    sauna: false,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/EL6PUNss_l.jpg?alt=media&token=81f8c820-5d27-4d99-a944-51acb6493aa8',
    luxury: false,
  },
  {
    rooms: 1,
    sauna: false,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/Rixos-The-Palm-Dubai3.jpg?alt=media&token=8e1426b8-011d-4d19-80ba-4c3b2271ec10',
    luxury: false,
  },
  {
    rooms: 1,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/foto-otelya-one-only-royal-mirage-v-dubae2-1.jpg?alt=media&token=359ad658-756b-4981-b306-b90a5380db40',
    luxury: true,
  },
  {
    rooms: 2,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/hilton-dubai-jumeirah-residences-hotel-1375802994348_w990h700.jpg?alt=media&token=c7479c58-0e83-4a1f-89a0-86f3ae481ae3',
    luxury: true,
  },
  {
    rooms: 1,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/hydropolis-underwater-hotel-dubai1.jpg?alt=media&token=10eaf1ef-0fd4-40ad-8265-b6056f66d4fc',
    luxury: true,
  },
  {
    rooms: 1,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/jbeach_28.jpg?alt=media&token=ab732360-31e3-41d5-9880-5082aded9b10',
    luxury: false,
  },
  {
    rooms: 1,
    sauna: false,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/jumeirah-beach-hotel-ocean-deluxe-room-1.jpg?alt=media&token=ebc021a8-ce58-4091-b897-b865ce882a80',
    luxury: false,
  },
  {
    rooms: 2,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/parus-hotel-dubai.jpg?alt=media&token=9c26ef82-c131-4349-9a2e-902a12b8534b',
    luxury: true,
  },
  {
    rooms: 1,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/volna-nomer.jpg?alt=media&token=b2144f4d-b482-47e3-8c70-d0e50716d935',
    luxury: false,
  },
  {
    rooms: 3,
    sauna: true,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/%D0%9D%D0%BE%D0%BC%D0%B5%D1%80-%D0%B2-%C2%AB%D0%91%D1%83%D1%80%D0%B4%D0%B6-%D0%90%D0%BB%D1%8C-%D0%90%D1%80%D0%B0%D0%B1%C2%BB.jpg?alt=media&token=6c2fc929-a056-4237-b96c-57fa838f9f62',
    luxury: true,
  },
  {
    rooms: 1,
    sauna: false,
    img:
      'https://firebasestorage.googleapis.com/v0/b/hotel-a7493.appspot.com/o/%D0%9D%D0%BE%D0%BC%D0%B5%D1%80-%D0%B2-%D0%BE%D1%82%D0%B5%D0%BB%D0%B5-DoubleTree-by-Hilton-Dubai-Jumeirah-Beach.jpg?alt=media&token=eeba19ec-7368-44e5-8e8a-f51fbfc75c56',
    luxury: false,
  },
];
// const item = ['Одноместный 1', 'Двухместный 2', 'Трёхместный 3'];
// function randomNumber(min = 0, max = 1) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }
// arrayOfHottel.forEach(element => {
//   const sauna = element.sauna ? 2 : 1;
//   const luxury = element.luxury ? 3 : 1;
//   element.price = element.rooms * luxury * sauna * randomNumber(150, 500);
//   element.payload = [
//     {
//       id: 'bGGsYvOCr6hFbuOQq70N44TghPJ2',
//       date: '2020-01-05',
//       dateTo: `2020-01-18`,
//       dateIn: '2020-0-15',
//       dateOut: '2020-0-18',
//     },
//   ];
//   element.tags = item[element.rooms - 1];
//   element.tags += element.sauna ? 'сауна' : '';
//   element.tags += element.luxury ? 'люкс' : 'комфортабельный';
//   firebase
//     .firestore()
//     .collection('flats')
//     .add(element);
// });

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
  // const [me, setMe] = useState(firebase.auth().currentUser);
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
