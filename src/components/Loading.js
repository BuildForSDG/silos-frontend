import React from 'react'
import ReactLoading from 'react-loading';


export default function Loading() {
  return (
    <div>
      <ReactLoading className="loading" type={'spokes'} color={'rgb(21, 32, 43)'} height={'20%'} width={'10%'} />
    </div>
  )
}
