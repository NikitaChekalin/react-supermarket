import React from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker/MapMarker'

const GoogleMap = () => {
  const markersArr = [
    {
      title: 'Магазине відділення №1',
      imageUrlMarker: '/img/assets/RS-removebg-preview.png',
      lat: 49.23,
      lng: 28.4682,
    },
    {
      title: 'Магазине відділення №2',
      imageUrlMarker: '/img/assets/RS-removebg-preview.png',
      lat: 49.2468,
      lng: 28.4682,
    },
    {
      title: 'Магазине відділення №3',
      imageUrlMarker: '/img/assets/RS-removebg-preview.png',
      lat: 49.234,
      lng: 28.45,
    },
    {
      title: 'Магазине відділення №4 Нове відділення',
      imageUrlMarker: '/img/assets/RS-removebg-preview.png',
      lat: 49.24,
      lng: 28.4,
    },
  ]
  const defaultProps = {
    center: {
      lat: 49.2331,
      lng: 28.4682,
    },
    zoom: 14.2,
  }

  return (
    <div style={{ height: '70vh', width: '90%', margin: '0 auto' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCdFm0-e42b3krBA5Ei8jkmlnstPOq3yPA',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markersArr.map((item) => (
          <MapMarker {...item} />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCdFm0-e42b3krBA5Ei8jkmlnstPOq3yPA
