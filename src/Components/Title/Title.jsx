import React from 'react'

const Title = React.memo(({ title }) => {
  return <h1>{title}</h1>
})

export default Title
