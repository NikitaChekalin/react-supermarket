import React from 'react'

const MapMarker = ({ title, imageUrlMarker }) => {
  return (
    <div style={{ display: 'block', width: '90px' }}>
      <img width={90} height={90} src={imageUrlMarker} alt="markerMap" />
      <p style={{ color: 'white ', fontSize: '12px', textAlign: 'center', marginTop: '-13px' }}>
        {title}
      </p>
    </div>
  )
}

export default MapMarker
