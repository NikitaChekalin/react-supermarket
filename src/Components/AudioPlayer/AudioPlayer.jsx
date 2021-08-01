import React from 'react'
import './AudioPlayer.css'
const AudioPlayer = ({ audioUrl, play }) => {
  return (
    <>
      <audio className="audio" src={audioUrl} autoPlay={play} controls />
    </>
  )
}
export default AudioPlayer
