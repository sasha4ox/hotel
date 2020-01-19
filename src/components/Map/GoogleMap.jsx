import React from 'react';
import { Place } from './Place';
import GoogleMapReact from 'google-map-react';

export const GoogleMap = props => {
  return (
    <section style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCBs12AL7JuA645BKHH_ObamtJm0vSfq98' }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <Place lat={49.238162} lng={28.478699} text={'F'} />
      </GoogleMapReact>
    </section>
  );
};
