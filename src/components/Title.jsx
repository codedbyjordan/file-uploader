import React from 'react'

const Title = (props) => {

  return (
    <div className="title">
      <h2>{props.children}</h2>
    </div>
  )
}

export default Title;