import React from 'react'
import MarkerIcon from "../../../assets/images/marker.png"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '100%'
};
const center = {
  lat: -3.745,
  lng: -38.523
};
const Map = ()=>{
return(
      <LoadScript
      googleMapsApiKey="AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* <img src={MarkerIcon}/> */}
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center} animation="BOUNCE"></Marker>
      </GoogleMap>
    </LoadScript>
)
}
export default  Map;