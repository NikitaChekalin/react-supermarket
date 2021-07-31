import React from 'react'
import './AudioPlayer.css'
const AudioPlayer = ({ audioUrl, play }) => {
  return (
    <>
      <audio className="audio" src={audioUrl} autoPla={play} controls />
    </>
  )
}
export default AudioPlayer
