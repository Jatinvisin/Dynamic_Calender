import React, { useState } from 'react'
import Calender from './Calender/Calender'

const App = () => {

  const [currentDate, setCurrentDate] = useState(new Date())
  
  
  return (
    <div className='mt-32 flex flex-col items-center'>
      <Calender value = {currentDate} onChange = {setCurrentDate}/>

    </div>
  )
}

export default App
