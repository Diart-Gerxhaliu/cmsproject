import React from 'react'
import HeDe2Bu from '../molecules/HeDe2Bu'

function Banner({
    backImage,
    h1,
    p,
    button1,
    button2
}) {
  return (
    <div className='banner' style={{backgroundImage:`url(${backImage})`}}>
      <HeDe2Bu
        h1={h1}
        p={p}
        button1={button1}
        button2={button2}
      />
    </div>
  )
}

export default Banner
