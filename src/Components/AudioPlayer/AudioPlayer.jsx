import React from 'react'
const AudioPlayer = React.memo(({ audioUrl, play }) => {
  return (
    <>
      <audio src={audioUrl} autoPlay={play} controls />
    </>
  )
})
export default AudioPlayer
