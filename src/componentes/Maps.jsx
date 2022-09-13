import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

function MyComponent() {   //Aquí fijaremos un un alto y un ancho para nuestro mapa
  const containerStyle = {
  width: '500px',
  height: '500px'
};

const center = {    //Estas coordenadas son el centro sobre el cual se va a situar el mapa al renderizarse por primera vez.
  lat: 40.55742746590223, 
  lng: -3.660167806103882
};
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDhnNN-xsOhBmJ2-MnDhyiOOn-l91Sf440" //Es un autentificador único para identificar a un usuario
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
        zoom={17}    //Es un valor numérico el cual nos indica lo cerca o lejos que mostrará el mapa de las coordenadas centrales que le pasemos.
       
        onUnmount={onUnmount}
      >
       
          <Marker      //Son los puntos marcados sobre el mapa,Por cada par de coordenadas tendremos un puntero en el mapa
           position={center}
        options={{ map: GoogleMap }}/>

      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
