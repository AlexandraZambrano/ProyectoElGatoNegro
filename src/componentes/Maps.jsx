import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';



function MyComponent() {
  const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: 40.55742746590223, 
  lng: -3.660167806103882
}

  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDhnNN-xsOhBmJ2-MnDhyiOOn-l91Sf440"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap({center})
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap ({center})
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
       
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
)  <></>

  

export default React.memo(MyComponent)
