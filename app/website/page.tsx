import React from 'react'
import WebCard from '../components/WebCard'

const page = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-5'>
        <WebCard/>
        <WebCard/>
        <WebCard/>
        <WebCard/>
        <WebCard/>
    </div>
  )
}

export default page